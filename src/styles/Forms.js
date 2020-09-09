import styled from '../../node_modules/styled-components';

const Form = {
    Heading: styled.h2`
        font-size: 40px;
        margin: 20px 0px;
        color: #66FCF1;
    `,

    Holder: styled.div`
        width: 80%;
        height: auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${props => props.color};
        display: ${props => props.display};
        text-align: center;

        @media (min-width: 500px) {
            width: 60%;
        }

        @media (min-width: 850px) {
            width: 30%;
        }
    `,

    Form_wrapper: styled.div`
        margin: 20px auto;
        width: 80%;
        text-align: left;
    `,

    Input: styled.input`
        box-sizing: border-box;
        width: 100%;
        outline: 0;
        color: #C5C6C7;
        background-color: #1F2833;
        border: 1px solid #1F2833;
        padding: 10px 10px;
        margin-top: 10px;
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
        text-align:center;
    `,

    Button: styled.button`
        margin: 30px auto 10px auto;
        font-size: 15px;
        background-color: transparent;
        width: 125px;
        height: 40px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 400;
        color: #66FCF1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: 1px solid #66FCF1;
        
        &:hover {
            -webkit-transition: all .15s ease-in-out;
            transition: all .15s ease-in-out;
            box-shadow: 0 0 10px 0 #66FCF1 inset, 0 0 10px 0px #66FCF1;
            border: 1px solid #66FCF1;
        }
    `,
}

export default Form;