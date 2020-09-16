import React, { useState, useEffect } from 'react';

import axios from 'axios';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import NextPosts from '../Components/NextPosts';
import Likes from '../Components/Likes';

import updateFeed from '../Utils/updateFeed';

import S from '../Styles/Feeds';

const GuestFeed = (props) => {
	JavascriptTimeAgo.addLocale(en);
	const [posts, setPosts] = useState([]);

	let axiosConfig = {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	};

	useEffect(() => {
		axios
			.post('https://akademia108.pl/api/social-app/post/latest', axiosConfig)
			.then((req) => {
				setPosts(req.data);
			})
			.catch((error) => {
				console.error(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (posts[0]) {
				updateFeed('not-all', posts[0].created_at, posts, setPosts, axiosConfig);
			}
		}, 15000);
		return () => clearInterval(interval);
	});

	const postList = posts.map((key) => {
		const date = new Date(key.created_at);
		return (
			<S.Holder key={key.id}>
				<S.UserHolder>
					<S.Avatar src={key.user.avatar_url} alt='avatar'></S.Avatar>
					<S.Username>{key.user.username}</S.Username>
					<S.Time date={date.getTime()} />
				</S.UserHolder>
				<S.Content>{key.content}</S.Content>
				<Likes id={key.id} axiosConfig={axiosConfig} guest={true} amount={key.likes.length} posts={posts} setPosts={setPosts} />
			</S.Holder>
		);
	});

	return (
		<S.Wraper>
			<S.LeftBar />
			<S.Feed style={{ marginTop: '20px' }}>
				{postList}
				<NextPosts axiosConfig={axiosConfig} guest={true} posts={posts} setPosts={setPosts} />
			</S.Feed>

			<S.RightBar style={{ marginTop: '0px' }} />
		</S.Wraper>
	);
};

export default GuestFeed;
