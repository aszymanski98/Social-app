import React, { useState, useEffect } from 'react';

import axios from 'axios';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import S from './styles/Feeds';

const GuestFeed = (props) => {

    JavascriptTimeAgo.addLocale(en);
    const [posts, setPosts] = useState([]);

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    useEffect(() => {
        axios.post('https://akademia108.pl/api/social-app/post/latest',
            axiosConfig)
            .then((req) => {
                setPosts(req.data);
            }

            ).catch((error) => {
                console.error(error);
            })
    }, [])

    const postList = posts.map(key => {
        const date = new Date(key.created_at)
        return (
            <S.Holder key={key.id}>
                <S.UserHolder>
                    <S.Avatar src={key.user.avatar_url} alt="avatar"></S.Avatar>
                    <S.Username>{key.user.username}</S.Username>
                    <S.Time date={date.getTime()} />
                </S.UserHolder>
                <S.Content>{key.content}</S.Content>
            </S.Holder>)
    })

    const nextPosts = () => {
        axios.post('https://akademia108.pl/api/social-app/post/older-then', {
            "date": `${posts[(posts.length) - 1].created_at}`
        }, axiosConfig)
            .then((req) => {
                setPosts(posts.concat(req.data));
            }

            ).catch((error) => {
                console.error(error);
            })
    }

    return (
        <S.Wraper>
            <S.Feed style={{'marginTop': '140px'}}>
                {postList}
            </S.Feed>

            <S.SideBar />

            <button onClick={nextPosts} style={{ position: 'fixed', bottom: 0, left: 0 }}>Get more posts</button>
        </S.Wraper>
    )
}

export default GuestFeed;