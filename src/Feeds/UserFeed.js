import React, { useState, useEffect } from 'react';

import axios from 'axios';
import JavascriptTimeAgo from 'javascript-time-ago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import en from 'javascript-time-ago/locale/en';
import styled from 'styled-components';

import NewPost from './Components/NewPost';
import Recommendations from './Recommendations';
import NextPosts from './Components/NextPosts';
import Likes from './Components/Likes';

import DeletePost from './Components/DeletePost';
import Follow from './Components/Follow';

import S from '../styles/Feeds';

const Icon = styled(FontAwesomeIcon)`
        font-size: 15px;
        position: absolute;
        color: #4a4a4a;
        top: 10px;
        right: 10px;
        cursor: pointer;
    `;

const UserFeed = (props) => {

    JavascriptTimeAgo.addLocale(en);

    const user = JSON.parse(localStorage.user);
    let jwtToken = user.jwt_token;

    const [posts, setPosts] = useState([]);

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwtToken}`
        }
    };

    const getPosts = () => {
        axios.post('https://akademia108.pl/api/social-app/post/latest', {},
            axiosConfig)
            .then((req) => {
                setPosts(req.data);
            }

            ).catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        getPosts();
    }, [])

    const postList = posts.map(key => {
        const date = new Date(key.created_at);

        let liked = false;

        key.likes.forEach(element => {
            element.username === user.username
                ? liked = true
                : liked = liked
        })

        return (
            <S.Holder key={key.id}>
                <S.UserHolder>
                    <S.Avatar src={key.user.avatar_url} alt="avatar"></S.Avatar>

                    {user.username === key.user.username
                        ? <S.Username>You</S.Username>
                        : <S.Username>{key.user.username}</S.Username>
                    }

                    {user.username === key.user.username
                        ? <Icon icon={faTimes} id={key.id} onClick={(event) => { DeletePost(event, getPosts, axiosConfig) }} />
                        : <S.FollowButton className={key.user.id} onClick={(event) => { Follow(event, 'unfollow', axiosConfig, getPosts) }}>Unfollow</S.FollowButton>
                    }

                    <S.Time date={date.getTime()} />
                </S.UserHolder>
                <S.Content>{key.content}</S.Content>
                
                <Likes id={key.id} liked={liked} axiosConfig={axiosConfig} amount={key.likes.length} getPosts={getPosts} />

            </S.Holder>)
    })

    return (
        <S.Wraper>
            <S.Feed>
                <NewPost axiosConfig={axiosConfig} getPosts={getPosts} />
                {postList}
            </S.Feed>

            <S.SideBar>
                <Recommendations axiosConfig={axiosConfig} getPosts={getPosts} />
            </S.SideBar>

            <NextPosts posts={posts} setPosts={setPosts} axiosConfig={axiosConfig} />

        </S.Wraper>
    )
}

export default UserFeed;