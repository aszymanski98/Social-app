import styled from 'styled-components';

const S = {
	AddButton: styled.button`
		font-size: 15px;
		background-color: transparent;
		width: 125px;
		height: 40px;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 400;
		margin: 0px 0px 10px auto;
		color: #66fcf1;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		border: 1px solid #66fcf1;
		outline: 0;

		&:hover {
			-webkit-transition: all 0.15s ease-in-out;
			transition: all 0.15s ease-in-out;
			box-shadow: 0 0 10px 0 #66fcf1 inset, 0 0 10px 0px #66fcf1;
			border: 1px solid #66fcf1;
		}
	`,

	Form: styled.form`
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	`,

	Textarea: styled.textarea`
		width: 100%;
		box-sizing: border-box;
		height: 100px;
		font-family: 'Kite One', sans-serif;
		font-size: 15px;
		margin: 10px 0px 10px 0px;
		background-color: #1f2833;
		border: 1px solid #1f2833;
		outline: 0;
		padding: 20px;
		color: #c5c6c7;
	`,
};

export default S;
