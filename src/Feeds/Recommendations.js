import React, { useState, useEffect } from 'react';

import axios from 'axios';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import S from '../styles/Recommendations';
import Follow from './Components/Follow';

const Recommendations = (props) => {

    JavascriptTimeAgo.addLocale(en);

    const [recommendations, setRecomendations] = useState([]);

    const getRecomendations = () => {
        axios.post('https://akademia108.pl/api/social-app/follows/recommendations', {},
            props.axiosConfig)
            .then((req) => {
                setRecomendations(req.data);
            }

            ).catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        getRecomendations();
    }, [props.getPosts])

    const recomendationList = recommendations.map(key => {
        return (<S.RecomendationsRow key={key.id}>
            <S.Avatar src={key.avatar_url} alt="avatar"></S.Avatar>
            <S.Username>{key.username}</S.Username>
            <S.FollowButton className={key.id}
                onClick={(event) => { Follow(event, 'follow', props.axiosConfig, props.getPosts); getRecomendations()}}>Follow</S.FollowButton>
        </S.RecomendationsRow>)
    })

    return (
        <S.Wraper>
            {recommendations.length >= 1

                ? <S.Recomendations>
                    <S.RecomendationsHeading>People You may know</S.RecomendationsHeading>
                    {recomendationList}
                </S.Recomendations>

                : null
            }
        </S.Wraper>
    )
}

export default Recommendations;