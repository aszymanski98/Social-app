import styled from 'styled-components';

const Form = {
    Heading: styled.h2`
        font-size: 40px;
        margin: 20px 0px;
        color: #b71c1c;
    `,

    Holder: styled.div`
        width: 30%;
        height: auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${props => props.color};
        display: ${props => props.display};
        text-align: center;
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
        color: #4a4a4a;
        background-color: #bdbdbd;
        border: 1px solid #bdbdbd;
        padding: 10px 10px;
        margin-top: 10px;
    `,

    Errors: styled.span`
        font-size: 12px;
        color: red;
        margin-bottom: 10px;
    `,

    Button_holder: styled.div`
        text-align:center;
    `,

    Button: styled.button`
        margin: 30px 0px 10px 0px;
        padding: 10px 30px;
        border-radius: 20px;
        outline: 0;
        color: #b71c1c;
        background-color: #8c8c8c;
        border: 2px solid #b71c1c;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: .5s;

    &:hover{
      color: #f05545;
      border: 2px solid #f05545;
    }`,
}

export default Form;