import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const S = {
   
    Icon :styled(FontAwesomeIcon)`
        font-size: 18px;
        color: #4a4a4a;
        cursor: pointer;
    `,
    RedIcon: styled(FontAwesomeIcon)`
        font-size: 18px;
        cursor: pointer;
        color: #b71c1c;
        
    `,
    Amount: styled.span`
        color: #4a4a4a;
        font-size: 15px;
        font-family: 'Kite One', sans-serif;
        margin-left: 5px;
    `,
}

export default S;