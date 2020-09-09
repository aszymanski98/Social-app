import React, { useState, useEffect } from 'react';

import axios from 'axios';
import JavascriptTimeAgo from 'javascript-time-ago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import en from 'javascript-time-ago/locale/en';
import styled from 'styled-components';

import NewPost from '../Components/NewPost';
import Recommendations from '../Components/Recommendations';
import NextPosts from '../Components/NextPosts';
import Likes from '../Components/Likes';

import deletePost from '../Utils/deletePost';
import follow from '../Utils/follow';
import updateFeed from '../Utils/updateFeed';

import S from '../Styles/Feeds';

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

    useEffect(() => {
        axios.post('https://akademia108.pl/api/social-app/post/latest', {},
            axiosConfig)
            .then((req) => {
                setPosts(req.data);
            }

            ).catch((error) => {
                console.error(error);
            })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (posts[0]) {
                updateFeed('not-all', posts[0].created_at, posts, setPosts, axiosConfig);
            }
        }, 15000);
        return () => clearInterval(interval);
    });

    const postList = posts.map(key => {

        const date = new Date(key.created_at);

        let liked = false;
        liked = key.likes.some(element => element.id === user.id);

        return (
            <S.Holder key={key.id}>
                <S.UserHolder>
                    <S.Avatar src={key.user.avatar_url} alt="avatar"></S.Avatar>

                    {user.id === key.user.id
                        ? <S.Username>You</S.Username>
                        : <S.Username>{key.user.username}</S.Username>
                    }

                    {user.id === key.user.id
                        ? <Icon icon={faTimes} id={key.id} onClick={(event) => { deletePost(event, posts, setPosts, axiosConfig) }} />
                        : <S.FollowButton className={key.user.id} onClick={(event) => { follow(event, 'unfollow', axiosConfig, posts, setPosts) }}>Unfollow</S.FollowButton>
                    }

                    <S.Time date={date.getTime()} />
                </S.UserHolder>
                <S.Content>{key.content}</S.Content>

                <Likes id={key.id} liked={liked} user={user} axiosConfig={axiosConfig} amount={key.likes.length} posts={posts} setPosts={setPosts} />

            </S.Holder>)
    });

    return (
        <S.Wraper>

            <S.LeftBar />

            <S.RightBar>
                <Recommendations axiosConfig={axiosConfig} posts={posts} setPosts={setPosts} />
            </S.RightBar>

            <S.Feed>
                <NewPost axiosConfig={axiosConfig} posts={posts} setPosts={setPosts} />
                {postList}
                <NextPosts axiosConfig={axiosConfig} posts={posts} setPosts={setPosts} />
            </S.Feed>


        </S.Wraper>
    )
}

export default UserFeed;