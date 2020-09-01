import React from 'react';

import Menu from "./styles/Menu";

const MainMenu = (props) => {

    if (localStorage.user === 'null') {
        return (
            <Menu.Nav>
                <Menu.List>
                    <Menu.Element><Menu.Link to="/">Feed</Menu.Link></Menu.Element>
                    <Menu.ElementLast><Menu.Link to="/login">Log in</Menu.Link>
                    <Menu.Link to="/signup">Sign up</Menu.Link></Menu.ElementLast>
                </Menu.List>
            </Menu.Nav>
        );
    } else {

        return (
            <Menu.Nav>
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