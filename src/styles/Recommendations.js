import styled from 'styled-components';
import Form from './Forms';

const S = {
    Wraper: styled.div`
        `,
        
    Recomendations: styled.div`
        background-color: #bdbdbd;
        padding: 10px 20px;
        margin: 140px 5px 0px 5px;
        position: sticky;
        `,

    RecomendationsHeading: styled.h2`
        color: #4a4a4a;
        font-size: 1.2em;
        font-weight: 700;
        text-align: center;
    `,

    RecomendationsRow: styled.div`
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px
    `,

    Avatar: styled.img`
        width: 50px;
        border-radius: 50%;
    `,

    Username: styled.span`
        line-height: 50px;
        margin-left: 10px;
        margin-right: auto;
        color: #b71c1c;
        font-weight: 500;
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
}

export default S;