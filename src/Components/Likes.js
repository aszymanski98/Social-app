import React from 'react';

import axios from 'axios';

/* Icons */
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

/* Styles */
import S from '../styles/Likes';

const Likes = (props) => {
	const liking = (event, option) => {
		let indexInPosts = -1;
		let indexToDelete = -1;

		if (event.currentTarget.id) {
			if (option === 'like') {
				axios
					.post(
						'https://akademia108.pl/api/social-app/post/like',
						{
							post_id: `${event.currentTarget.id}`,
						},
						props.axiosConfig
					)
					.then((req) => {
						props.posts.forEach((element, index) => {
							if (element.id === Number(props.id)) indexInPosts = index;
						});
						let array = Array.from(props.posts);
						array[indexInPosts].likes.push(props.user);
						props.setPosts(array);
					})
					.catch((error) => {
						console.error(error);
					});
			} else {
				axios
					.post(
						'https://akademia108.pl/api/social-app/post/dislike',
						{
							post_id: `${event.currentTarget.id}`,
						},
						props.axiosConfig
					)
					.then((req) => {
						let array = Array.from(props.posts);

						array.forEach((element, index) => {
							if (element.id === Number(props.id)) indexInPosts = index;
						});
						array[indexInPosts].likes.forEach((element, index) => {
							if (element.id === Number(props.id)) indexToDelete = index;
						});

						array[indexInPosts].likes.splice(indexToDelete, 1);
						props.setPosts(array);
					})
					.catch((error) => {
						console.error(error);
					});
			}
		}
	};

	return (
		<div>
			{props.liked ? (
				<S.RedIcon
					id={props.id}
					icon={fasHeart}
					onClick={(event) => {
						liking(event);
					}}
				/>
			) : props.guest ? (
				<S.Icon style={{ cursor: 'default' }} icon={farHeart} />
			) : (
				<S.Icon
					id={props.id}
					icon={farHeart}
					onClick={(event) => {
						liking(event, 'like');
					}}
				/>
			)}
			<S.Amount>{props.amount}</S.Amount>
		</div>
	);
};

export default Likes;
