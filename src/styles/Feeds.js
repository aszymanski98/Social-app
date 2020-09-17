import styled from '../../node_modules/styled-components';

import ReactTimeAgo from '../../node_modules/react-time-ago';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const S = {
	Wraper: styled.div`
		box-sizing: border-box;
		display: block;
		padding: 0px 5px;

		@media (min-width: 850px) {
			padding: 0px;
			width: 75%;
			margin: 0px auto;
		}

		@media (min-width: 1400px) {
			width: 60%;
		}
	`,
	Feed: styled.div`
		box-sizing: border-box;
  `,
  
	Holder: styled.div`
		color: black;
		background-color: #1f2833;
		border: 0;
		margin-bottom: 5px;
		padding: 20px;
		position: relative;
	`,

	UserHolder: styled.div`
		display: flex;
		align-items: center;
	`,

	Avatar: styled.img`
		width: 50px;
		border-radius: 50%;
	`,

	Username: styled.span`
		margin-left: 10px;
		color: #66fcf1;
		font-weight: 500;
	`,

	Content: styled.div`
		margin: 10px 0px 10px 0px;
		color: #c5c6c7;
		font-size: 15px;
		font-family: 'Kite One', sans-serif;
	`,

	Time: styled(ReactTimeAgo)`
		font-family: 'Kite One', sans-serif;
		color: #c5c6c7;
		font-size: 10px;
		margin-left: 10px;
	`,

	FollowButton: styled.a`
		font-family: 'Kite One', sans-serif;
		cursor: pointer;
		color: #c5c6c7;
		margin: 0px 0px 0px 10px;
		font-size: 15px;
		background: transparent;
	`,

	Icon: styled(FontAwesomeIcon)`
		font-size: 15px;
		position: absolute;
		color: #c5c6c7;
		top: 10px;
		right: 10px;
		cursor: pointer;
	`,
};

export default S;
