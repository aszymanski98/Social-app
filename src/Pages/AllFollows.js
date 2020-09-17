import React, { useState, useEffect } from 'react';
import axios from 'axios';

/* Styles */
import S from '../Styles/AllFollows';

/* Assets */
import loader from '../assets/Loader.gif';

const AllFollows = (props) => {
	const [follows, setFollows] = useState([]);
	const [data, setData] = useState(false);

	const user = JSON.parse(localStorage.user);
	let jwtToken = user.jwt_token;

	const axiosConfig = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${jwtToken}`,
		},
	};

	useEffect(() => {
		axios
			.post('https://akademia108.pl/api/social-app/follows/allfollows', {}, axiosConfig)
			.then((req) => {
				setFollows(req.data);

				setTimeout(() => {
					setData(true);
				}, 300);
			})
			.catch((error) => {
				console.error(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const unfollow = (event) => {
		let leader_id = event.target.className;
		leader_id = leader_id.replace(/[^0-9]/g, '');

		axios
			.post('https://akademia108.pl/api/social-app/follows/disfollow', { leader_id: { leader_id } }, axiosConfig)
			.then((req) => {
				let array = Array.from(follows);

				for (let i = array.length; i--; ) {
					if (array[i].id === Number(leader_id)) {
						array.splice(i, 1);
					}
				}
				setFollows(array);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const recomendationList = follows.map((key) => {
		return (
			<S.Row key={key.id}>
				<S.Avatar src={key.avatar_url} alt='avatar'></S.Avatar>
				<S.Username>{key.username}</S.Username>
				<S.FollowButton
					className={key.id}
					onClick={(event) => {
						unfollow(event);
					}}
				>
					Unfollow
				</S.FollowButton>
			</S.Row>
		);
	});

	return data ? (
		follows.length < 1 ? (
			<S.Wraper>
				<S.Span>You don't follow anyone</S.Span>
			</S.Wraper>
		) : (
			<S.Wraper>{recomendationList}</S.Wraper>
		)
	) : (
		<S.Img src={loader} alt='loading...' />
	);
};

export default AllFollows;
