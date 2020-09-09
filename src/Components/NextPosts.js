import React, { useRef, useState } from 'react';

import axios from 'axios';

import loader from '../assets/Loader.gif';
import S from '../Styles/NextPosts';

const NextPosts = (props) => {

    const endOfPageRef = useRef();
    const [createdRef, setRef] = useState(false);

    const nextPosts = () => {
        axios.post('https://akademia108.pl/api/social-app/post/older-then', {
            "date": `${props.posts[(props.posts.length) - 1].created_at}`
        }, props.axiosConfig)
            .then((req) => {
                setTimeout(() => {
                    props.setPosts(props.posts.concat(req.data));
                    setRef(false);
                }, 300)
            }

            ).catch((error) => {
                console.error(error);
            })
    }

    let options = {
        rootMargin: '0px',
        threshold: 0.9
    }

    if (props.posts[0]) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    nextPosts();
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        if (endOfPageRef.current) {
            if (!createdRef) {
                observer.observe(endOfPageRef.current);
                setRef(true);
            }
        }
    }

    

    return (
        <div ref={node => { endOfPageRef.current = node }} style={{ "height": '50px' }} className="empty"><S.Img src={loader} alt="loading..." /></div>
    )
}

export default NextPosts;