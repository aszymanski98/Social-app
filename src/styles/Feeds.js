import styled from 'styled-components';
import ReactTimeAgo from 'react-time-ago';
import Form from './Forms';

const S = {
    Wraper: styled.div`
        flex: 3;
        display: flex;
        flex-direction: row;
        
    `,
    Feed: styled.div`
        flex: 2;
    `,
    SideBar: styled.div`
        flex: 1;
    `,
    Holder: styled.div`
        color: black;
        background-color: #bdbdbd;
        border: 0;
        margin-bottom: 5px;
        padding: 20px;
        `,

    UserHolder: styled.div`
        color: black;
        display: flex;
        `,

    Avatar: styled.img`
        width: 50px;
        border-radius: 50%;
        `,

    Username: styled.span`
        line-height: 50px;
        margin-left: 10px;
        color: #b71c1c;
        font-weight: 500;
        `,

    Content: styled.div`
        margin: 10px 0px 10px 0px;
        color: #4a4a4a;
        `,
    Time: styled(ReactTimeAgo)`
        color: #4a4a4a;
        font-size: 10px;
        line-height: 50px;
        margin-left: 10px;
        `,

    FollowButton: styled(Form.Button)`
        color: #b71c1c;
        height: 20px;
        color: #4a4a4a;
        border: 1px solid #4a4a4a;
        line-height: 0px;
        margin: 15px 0px 0px 10px;
        padding: 10px 5px;
        font-size: 10px;
        background: transparent;
        border-radius: 0px;

        &:hover {
            border: 1px solid #4a4a4a;
            color: #4a4a4a;
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
        margin: 20px 0px;
        background-color: #bdbdbd;
        border: 1px solid #bdbdbd;
        outline: 0;
        padding: 20px;
        color: #4a4a4a;
    `,
}

export default S;