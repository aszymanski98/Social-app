import styled from '../../node_modules/styled-components';

const S = {
	Wraper: styled.div`
	`,

	Recomendations: styled.div`
		background-color: #1f2833;
		padding: 10px;
		margin: 0px 0px 10px 0px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
	`,

	RecomendationsHeading: styled.h2`
		font-family: 'Kite One', sans-serif;
		color: #c5c6c7;
		margin: 20px 0px;
		font-size: 1.2em;
		font-weight: 700;
		text-align: center;
		flex-basis: 100%;
	`,

	RecomendationsRow: styled.div`
		display: flex;
		flex-basis: 30%;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 20px;
	`,

	Avatar: styled.img`
		width: 50px;
		border-radius: 50%;
	`,

	Username: styled.span`
		line-height: 45px;
		margin: 0;
		color: #66fcf1;
		font-weight: 500;
		text-align: center;
		flex-basis: 100%;
		@media (min-width: 850px) {
			flex-basis: auto;
			margin-left: 10px;
		}
	`,

	FollowButton: styled.a`
		font-family: 'Kite One', sans-serif;
		flex-basis: 100%;
		text-align: center;
		cursor: pointer;
		color: #c5c6c7;
		margin-top: 15px;
		font-size: 15px;
		background: transparent;
	`,
};

export default S;
