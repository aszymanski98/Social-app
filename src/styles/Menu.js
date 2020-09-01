import styled from 'styled-components';
import {
    Link
} from "react-router-dom";

const Menu = {
    Nav: styled.nav`
        flex: 1;
        `,

    List: styled.ul`
        margin: 0px 0px 0px 40px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        position: fixed;
        padding: 0px;
    `,

    Element: styled.li`
        margin-top: 140px;
        `,

    ElementLast: styled.li`
        margin-bottom: 20vh;
        `,

    Link: styled(Link)`
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        margin-bottom: 10px;
        color: #7f0000;
        font-weight: 400;
        font-size: 20px;
        transition: .5s;

        &:hover {
            color: #b71c1c;
        }
        `,
};

export default Menu;