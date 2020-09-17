import styled from '../../node_modules/styled-components';

const S = {
	Holder: styled.div`
		width: 80%;
		height: auto;
		position: fixed;
		z-index: 500;
		display: flex;
		top: 50%;
		left: 50%;
		flex-wrap: wrap;
		justify-content: space-evenly;
		transform: translate(-50%, -50%);
		background-color: #0b0c10;
		text-align: center;
		padding: 20px;
		color: #c5c6c7;

		@media (min-width: 570px) {
			width: 50%;
		}

		@media (min-width: 1000px) {
			width: 30%;
		}
	`,

	Header: styled.div`
		color: #66fcf1;
		font-size: 20px;
		flex-basis: 100%;
		padding-bottom: 20px;
	`,

	ImgNo: styled.img`
		width: 40px;
		height: auto;
		cursor: pointer;
	`,

	ImgYes: styled.img`
		cursor: pointer;
		width: 50px;
		height: auto;
	`,
};
export default S;
