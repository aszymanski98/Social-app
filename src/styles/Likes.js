import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const S = {
	Icon: styled(FontAwesomeIcon)`
		font-size: 18px;
		color: #c5c6c7;
		cursor: pointer;
	`,
	RedIcon: styled(FontAwesomeIcon)`
		font-size: 18px;
		cursor: pointer;
		color: #66fcf1;
	`,
	Amount: styled.span`
		color: #c5c6c7;
		font-size: 15px;
		font-family: 'Kite One', sans-serif;
		margin-left: 5px;
	`,
};

export default S;
