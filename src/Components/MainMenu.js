import React, { useState } from 'react';

import Menu from "../Styles/Menu";

const MainMenu = (props) => {

    const [scrollClass, setScrollClass] = useState("scrolled-up");
    const [lastScrollHeight, setlastScrollHeight] = useState(0);

    window.onscroll = function () {
        
        let scroll_top = window.pageYOffset;
        console.log(scroll_top);

         if (scroll_top < lastScrollHeight) {
            setScrollClass('scrolled-up');
        }
        else {
            setScrollClass('scrolled-down');
        }
        setlastScrollHeight(scroll_top); 
    }


    if (!props.logged) {
        return (
            <Menu.Nav className={scrollClass}>
                <Menu.List>
                    <Menu.Element><Menu.Link to="/">Feed</Menu.Link></Menu.Element>
                    <Menu.ElementLast><Menu.Link to="/login">Log in</Menu.Link>
                        <Menu.LastLink to="/signup">Sign up</Menu.LastLink></Menu.ElementLast>
                </Menu.List>
            </Menu.Nav>
        );
    } else {

        return (
            <Menu.Nav className={scrollClass}>
                <Menu.List>
                    <Menu.Element><Menu.Link to="/">Feed</Menu.Link></Menu.Element>
                    <Menu.ElementLast><Menu.Link to="" onClick={() => {
                        localStorage.user = null;
                        props.updateUser(false);

                    }}>Log out</Menu.Link></Menu.ElementLast>
                </Menu.List>
            </Menu.Nav>
        );
    }
}

export default MainMenu;