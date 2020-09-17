import styled from '../../node_modules/styled-components';

const S = {
	Img: styled.img`
		height: 50px;
		width: auto;
		margin: 35px auto;
		display: block;
		scale: 0.5;
	`,

	Wraper: styled.div`
		margin-top: 10px;
		width: 100%;
	`,

	Row: styled.div`
		margin: 0px auto;
		width: 60%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
		background-color: #1f2833;
		padding: 10px 20px;

		@media (min-width: 1000px) {
			width: 30%;
		}
	`,

	Avatar: styled.img`
		width: 50px;
		border-radius: 50%;
	`,

	Username: styled.span`
		line-height: 45px;
		margin-left: 20px;
		margin-right: auto;
		color: #66fcf1;
		font-weight: 500;
		text-align: center;
	`,

	FollowButton: styled.a`
		font-family: 'Kite One', sans-serif;
		text-align: center;
		cursor: pointer;
		color: #c5c6c7;
		margin-top: 15px;
		font-size: 15px;
		background: transparent;
		flex-basis: auto;
		margin: 0;
		line-height: 50px;
	`,

	Span: styled.span`
		display: block;
		color: #c5c6c7;
		text-align: center;
	`,
};

export default S;
