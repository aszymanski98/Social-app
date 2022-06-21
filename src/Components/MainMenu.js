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
							to='/Social-app/'
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
							to='/Social-app/'
							onClick={() => {
								props.hide();
								props.updateUser();
							}}
						>
							Feed
						</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/Social-app/login'>Log in</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/Social-app/signup'>Sign up</Menu.Link>
					</Menu.Element>
				</Menu.List>
			</Menu.Nav>
		);
	} else {
		return (
			<Menu.Nav className={scrollClass}>
				<Menu.List>
					<Menu.Logo to='/Social-app/'>Social-app</Menu.Logo>

					<Menu.Element>
						<Menu.Link to='/Social-app/'>Feed</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/Social-app/allFollows'>All follows</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link
							to='/Social-app/'
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
