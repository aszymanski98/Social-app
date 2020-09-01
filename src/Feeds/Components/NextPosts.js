import React from 'react';

import axios from 'axios';

const NextPosts = (props) => {

    const nextPosts = () => {
        axios.post('https://akademia108.pl/api/social-app/post/older-then', {
            "date": `${props.posts[(props.posts.length) - 1].created_at}`
        }, props.axiosConfig)
            .then((req) => {
                props.setPosts(props.posts.concat(req.data));
            }

            ).catch((error) => {
                console.error(error);
            })
    }

    return (
        <button onClick={nextPosts} style={{ position: 'fixed', bottom: 0, left: 0 }}>Get more posts</button>
    )
}

export default NextPosts;