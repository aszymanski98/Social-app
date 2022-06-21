import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* Styles */
import S from '../styles/Recommendations';

/* Utils */
import follow from '../Utils/follow';

const Recommendations = (props) => {
	const [recommendations, setRecomendations] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			axios
				.post('https://akademia108.pl/api/social-app/follows/recommendations', {}, props.axiosConfig)
				.then((req) => {
          setRecomendations(req.data);
				})
				.catch((error) => {
					console.error(error);
				});
		}, 425);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.updateRecomendations]);

	const recomendationList = recommendations.map((key) => {
		return (
			<S.RecomendationsRow key={key.id}>
				<S.Avatar src={key.avatar_url} alt='avatar'></S.Avatar>
				<S.Username>{key.username}</S.Username>
				<S.FollowButton
					className={key.id}
					onClick={(event) => {
            follow(event, 'follow', props.axiosConfig, props.posts, props.setPosts);
            props.updateRecomendations ? props.makeUpdate(false) : props.makeUpdate(true);
					}}
				>
					Follow
				</S.FollowButton>
			</S.RecomendationsRow>
		);
	});

	return (
		<S.Wraper>
			{recommendations.length >= 1 ? (
				<S.Recomendations>
					<S.RecomendationsHeading>People You may know</S.RecomendationsHeading>
					{recomendationList}
				</S.Recomendations>
			) : (
				<S.Recomendations style={{ display: 'none' }}>
					<S.RecomendationsHeading>People You may know</S.RecomendationsHeading>
					{recomendationList}
				</S.Recomendations>
			)}
		</S.Wraper>
	);
};

export default Recommendations;
