import React, { useState } from 'react';

/* Styles */
import Menu from '../styles/Menu';

const MainMenu = (props) => {
	const [scrollClass, setScrollClass] = useState('scrolled-up');
	const [lastScrollHeight, setLastScrollHeight] = useState(0);

	window.onscroll = function () {
		let scroll_top = window.pageYOffset;

		if (scroll_top < lastScrollHeight) {
			setScrollClass('scrolled-up');
		} else {
			setScrollClass('scrolled-down');
		}
		setLastScrollHeight(scroll_top);
	};

	if (!props.logged) {
		return (
			<Menu.Nav className={scrollClass}>
				<Menu.List>
					<Menu.Element>
						<Menu.Logo
							to='/Social-app-ReactJS/'
							onClick={() => {
								props.hide();
								props.updateUser();
							}}
						>
							Social-app
						</Menu.Logo>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link
							to='/Social-app-ReactJS/'
							onClick={() => {
								props.hide();
								props.updateUser();
							}}
						>
							Feed
						</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/Social-app-ReactJS/login'>Log in</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/Social-app-ReactJS/signup'>Sign up</Menu.Link>
					</Menu.Element>
				</Menu.List>
			</Menu.Nav>
		);
	} else {
		return (
			<Menu.Nav className={scrollClass}>
				<Menu.List>
					<Menu.Logo to='/Social-app-ReactJS/'>Social-app</Menu.Logo>

					<Menu.Element>
						<Menu.Link to='/Social-app-ReactJS/'>Feed</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/Social-app-ReactJS/allFollows'>All follows</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link
							to='/Social-app-ReactJS/'
							onClick={() => {
								localStorage.user = null;
								props.updateUser(false);
							}}
						>
							Log out
						</Menu.Link>
					</Menu.Element>
				</Menu.List>
			</Menu.Nav>
		);
	}
};

export default MainMenu;
