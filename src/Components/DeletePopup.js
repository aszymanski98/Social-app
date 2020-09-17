import React, { useState } from 'react';

/* Utils */
import deletePost from '../Utils/deletePost';

/* Styles */
import S from '../Styles/DeletePopup';

/* Assets */
import yes from '../assets/yes.svg';
import no from '../assets/no.svg';

const DeletePopup = (props) => {
	const [invisible, hide] = useState(false);

	return (
		<>
			{invisible ? null : (
				<S.Holder>
					<S.Header>Do You want to delete this post?</S.Header>
					<S.ImgYes
						onClick={() => {
							deletePost(props.id, props.posts, props.setPosts, props.axiosConfig);
							hide(true);
							props.setEvent({});
						}}
						src={yes}
						alt='yes'
					/>
					<S.ImgNo
						onClick={() => {
							hide(true);
							props.setEvent({});
						}}
						src={no}
						alt='yes'
					/>
				</S.Holder>
			)}
			;
		</>
	);
};

export default DeletePopup;
