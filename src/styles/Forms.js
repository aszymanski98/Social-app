import styled from '../../node_modules/styled-components';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const S = {
	Heading: styled.h2`
		font-size: 40px;
		margin: 20px 0px 10px 0px;
		color: #66fcf1;
	`,

	Holder: styled.div`
    width: 80%;
		height: auto;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: ${(props) => props.color};
		display: ${(props) => props.display};
		text-align: center;
		padding-bottom: 20px;

		@media (min-width: 500px) {
			width: 60%;
		}

		@media (min-width: 850px) {
			width: 30%;
		}
	`,

	Form_wrapper: styled.div`
		margin: 0px auto 20px auto;
		width: 80%;
		text-align: left;
	`,

	Input_wrapper: styled.fieldset`
    position: relative;
    border: 0px;
    padding: 0;
    
	`,

  Label: styled.div`
    position: absolute;
		top: 27.5px;
		left: 5px;
    color: #c5c6c7;
    padding: 0px 5px;
		line-height: 35px;
		pointer-events: none;
	`,

	Errors: styled.span`
		font-size: 12px;
		color: red;
		margin-bottom: 10px;
	`,

	Signed: styled.span`
		font-size: 18px;
		color: green;
		display: block;
		text-align: center;
		margin: 15px 0px 15px 0px;
	`,

	Button_holder: styled.div`
		text-align: center;
		margin-top: 30px;
	`,

	Button: styled.button`
		height: 100%;
		margin: 0px auto;
		font-size: 15px;
		background-color: transparent;
		width: 125px;
		height: 40px;
		cursor: pointer;
		text-transform: uppercase;
		font-weight: 400;
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

	Link: styled(Link)`
		text-decoration: none;
		color: #66fcf1;
	`,

	Span: styled.span`
		color: #c5c6c7;
	`,

	Icon: styled(FontAwesomeIcon)`
		font-size: 30px;
		position: absolute;
		display: ${(props) => props.display};
		color: #66fcf1;
		right: 10px;
		top: 10px;
		cursor: pointer;
  `,
  
  EyeIcon: styled(FontAwesomeIcon)`
    position: absolute;
    font-size: 20px;
    cursor: pointer;
    top: 35px;
    right: 10px;
    color: #c5c6c7;
    z-index: 100;
  `,
};

export default S;
