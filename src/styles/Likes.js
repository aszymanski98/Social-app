import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const S = {
   
    Icon :styled(FontAwesomeIcon)`
        font-size: 18px;
        color: #C5C6C7;
        cursor: pointer;
    `,
    RedIcon: styled(FontAwesomeIcon)`
        font-size: 18px;
        cursor: pointer;
        color: #66FCF1;
        
    `,
    Amount: styled.span`
        color: #C5C6C7;
        font-size: 15px;
        font-family: 'Kite One', sans-serif;
        margin-left: 5px;
    `,
}

export default S;