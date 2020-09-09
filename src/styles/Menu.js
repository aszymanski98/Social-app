import styled from 'styled-components';

import {
    Link
} from "react-router-dom";

const Menu = {
    Nav: styled.nav`
        box-sizing: border-box;
        height: 40px;
        background-color: #45A29E;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        padding: 0px 40px;

        &.scrolled-down{
            transform:translateY(-100%); transition: all 0.3s ease-in-out;
        }

        &.scrolled-up{
            transform:translateY(0); transition: all 0.3s ease-in-out;
        }
        `,

    List: styled.ul`
        width: 100%;
        margin: 0;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        padding: 0;
    `,

    Element: styled.li`
        margin: 0;
        `,

    ElementLast: styled.li`
        display: flex;
        `,

    Link: styled(Link)`
        font-size: 15px;
        color: #66FCF1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        height: 100%;`,

    LastLink: styled(Link)`
        font-size: 15px;
        color: #66FCF1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        height: 100%;
        margin-left: 20px;
        `,
};

export default Menu;