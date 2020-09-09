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
        padding: 0px 20px;

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
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding: 0;

    `,

    Logo: styled.li`
        font-size: 20px;
        font-weight: bold;
        color: #0B0C10;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        height: 100%;
    `,

    Element: styled.li`
        margin: 0px;
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
};

export default Menu;