import React, { useState } from 'react';

import Menu from '../Styles/Menu';

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
					<Menu.Logo>Social-app</Menu.Logo>

					<Menu.Element>
						<Menu.Link
							to='/'
							onClick={() => {
								props.hide();
								props.updateUser();
							}}
						>
							Feed
						</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/login'>Log in</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/signup'>Sign up</Menu.Link>
					</Menu.Element>
				</Menu.List>
			</Menu.Nav>
		);
	} else {
		return (
			<Menu.Nav className={scrollClass}>
				<Menu.List>
					<Menu.Logo>Social-app</Menu.Logo>

					<Menu.Element>
						<Menu.Link to='/'>Feed</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link to='/allFollows'>All follows</Menu.Link>
					</Menu.Element>

					<Menu.Element>
						<Menu.Link
							to=''
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
