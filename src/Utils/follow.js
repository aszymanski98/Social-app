import axios from 'axios';
import updateFeed from './updateFeed';

const follow = (event, option, axiosConfig, posts, setPosts) => {
	let leader_id = event.target.className;
	leader_id = leader_id.replace(/[^0-9]/g, '');

	if (option === 'follow') {
		axios
			.post(
				'https://akademia108.pl/api/social-app/follows/follow',
				{
					leader_id: { leader_id },
				},
				axiosConfig
			)
			.then((req) => {
				updateFeed('all', posts[posts.length - 1].created_at, posts, setPosts, axiosConfig);
			})
			.catch((error) => {
				console.error(error);
			});
	} else {
		axios
			.post(
				'https://akademia108.pl/api/social-app/follows/disfollow',
				{
					leader_id: { leader_id },
				},
				axiosConfig
			)
			.then((req) => {
				let array = Array.from(posts);

				for (let i = array.length; i--; ) {
					if (array[i].user.id === Number(leader_id)) {
						array.splice(i, 1);
					}
				}

				setPosts(array);
			})
			.catch((error) => {
				console.error(error);
			});
	}
};

export default follow;
