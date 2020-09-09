import styled from '../../node_modules/styled-components';

const S = {
    Wraper: styled.div`
        @media (min-width: 1400px) {
            position: sticky;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
        } 
    `,

    Recomendations: styled.div`
        background-color: #1F2833;
        padding: 10px;
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;

        @media (min-width: 1400px) {
            padding-bottom: 35px;
            flex-direction: column;
            margin: auto 5px;
        }
        
        `,

    RecomendationsHeading: styled.h2`
        font-family: 'Kite One', sans-serif;
        color: #C5C6C7;
        margin: 20px 0px;
        font-size: 1.2em;
        font-weight: 700;
        text-align: center;
        flex-basis: 100%;
    `,

    RecomendationsRow: styled.div`
        display: flex;
        flex-basis: 30%;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 20px;

        @media (min-width: 1400px) {
            justify-content: space-between;
            padding: 0 20px;
            margin-top: 5px;
            margin-bottom: 0px;
        }

    `,

    Avatar: styled.img`
        width: 50px;
        border-radius: 50%;
    `,

    Username: styled.span`
        line-height: 45px;
        margin: 0;
        color: #66FCF1;
        font-weight: 500;
        text-align: center;
        flex-basis: 100%;
        @media (min-width: 850px) {
            flex-basis: auto;
            margin-left: 10px;
        } 
        

        @media (min-width: 1400px) {
            margin-right: auto;
        } 
        
    `,

    FollowButton: styled.a`
        font-family: 'Kite One', sans-serif;
        flex-basis: 100%;
        text-align: center;
        cursor: pointer;
        color: #C5C6C7;
        margin-top: 15px;
        font-size: 15px;
        background: transparent;
        
        @media (min-width: 1400px) {
            flex-basis: auto;
            margin: 0;
            line-height: 50px;
        }
    `,
}

export default S;