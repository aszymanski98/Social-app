import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';

const S = {
    Wraper: styled.div`
        flex-basis: 75%;
        display: flex;
        flex-direction: row;
    `,
    Feed: styled.div`
        flex: 2;
    `,
    SideBar: styled.div`
        flex-basis: 33%;
    `,
    Holder: styled.div`
        color: black;
        background-color: #bdbdbd;
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
        color: #b71c1c;
        font-weight: 500;
        `,

    Content: styled.div`
        margin: 10px 0px 10px 0px;
        color: #4a4a4a;
        font-size: 15px;
        font-family: 'Kite One', sans-serif;
        `,
        
    Time: styled(ReactTimeAgo)`
        font-family: 'Kite One', sans-serif;
        color: #4a4a4a;
        font-size: 10px;
        margin-left: 10px;
        `,

    FollowButton: styled.a`
        font-family: 'Kite One', sans-serif;
        cursor: pointer;
        color: #b71c1c;
        color: #4a4a4a;
        margin: 0px 0px 0px 10px;
        font-size: 15px;
        background: transparent;
        `,
}

export default S;