import styled from '../../node_modules/styled-components';
import ReactTimeAgo from '../../node_modules/react-time-ago';

const S = {
    Wraper: styled.div`
        
        box-sizing: border-box;
        display: block;
        padding: 0px 5px;

        @media (min-width: 850px) {
            padding: 0px;
            display: flex;
            flex-direction: column;
            width: 75%;
            margin: 0px auto;
        }

        @media (min-width: 1400px) {
            flex-direction: row;
            margin-right: 0;
            width: 100%;
        } 
    `,
    Feed: styled.div`
        box-sizing: border-box;
        order: 2;
        position: relative;
        @media (min-width: 1400px) {
            width: 75%;
            order: 0;
        } 
    `,

    RightBar: styled.div`
        margin-top: 20px;
        width: 100%;
        order: 1;
        @media (min-width: 1400px) {
            width: 25%;
            position: static;
        }
    `,

    LeftBar: styled.div`
        width: 25%;
    `,

    Holder: styled.div`
        color: black;
        background-color: #1F2833;
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
        color: #66FCF1;
        font-weight: 500;
        `,

    Content: styled.div`
        margin: 10px 0px 10px 0px;
        color: #C5C6C7;
        font-size: 15px;
        font-family: 'Kite One', sans-serif;
        `,
        
    Time: styled(ReactTimeAgo)`
        font-family: 'Kite One', sans-serif;
        color: #C5C6C7;
        font-size: 10px;
        margin-left: 10px;
        `,

    FollowButton: styled.a`
        font-family: 'Kite One', sans-serif;
        cursor: pointer;
        color: #C5C6C7;
        margin: 0px 0px 0px 10px;
        font-size: 15px;
        background: transparent;
        `,
}

export default S;