import styled from 'styled-components';
import Form from './Forms';

const S = {

    AddButton: styled(Form.Button)`
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