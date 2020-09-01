import React from 'react';

import axios from 'axios';

import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import S from '../../styles/Likes';

const Likes = (props) => {

    const liking = (event, option) => {

        let href = '';

        switch (option) {
            case 'like':
                href = 'https://akademia108.pl/api/social-app/post/like';
                break;

            case 'dislike':
                href = 'https://akademia108.pl/api/social-app/post/dislike';
                break;

            default:
                break;
        }

        axios.post(href, {
            "post_id": `${event.currentTarget.id}`
        },

            props.axiosConfig)
            .then((req) => {
                console.log(req.data);
                props.getPosts();
            }

            ).catch((error) => {
                console.error(error);
            })
    }


    return (
        <div>
            {props.liked
                ? <S.Icon id={props.id} icon={fasHeart} onClick={(event) => { liking(event, 'dislike') }} />
                : <S.Icon id={props.id} icon={farHeart} onClick={(event) => { liking(event, 'like') }} />}
            <S.Amount>{props.amount}</S.Amount>
        </div>
    )
}

export default Likes;