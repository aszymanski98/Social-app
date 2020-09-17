import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/* Components */
import MainMenu from './Components/MainMenu';
import Login from './Components/Login';

/* Pages */
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import UserFeed from './Pages/UserFeed';
import GuestFeed from './Pages/GuestFeed';
import AllFollows from './Pages/AllFollows';

/* Styles */
import S from './Styles/App';

class App extends Component {
	constructor() {
		super();
		this.currentUser = JSON.parse(localStorage.getItem('user'));
		this.state = {
			userLoggedIn: this.currentUser ? true : false,
			loaded: false,
		};
	}
	hidePopup = () => {
		this.setState({ loaded: false });
	};

	updateUser = (isLogged) => {
		clearTimeout(this.timerID);
		this.setState({ userLoggedIn: isLogged }, () => {
			this.timerPopup();
		});
	};

	timerPopup = () => {
		if (!this.state.userLoggedIn) {
			this.setState({ loaded: false });

			this.timerID = setTimeout(() => {
				this.setState({ loaded: true });
			}, 10000);
		}
	};

	componentDidMount() {
		this.timerPopup();
	}

	componentWillUnmount() {
		clearTimeout(this.timerID);
	}

	render() {
		return (
			<Router>
				<S.App>
					{this.state.userLoggedIn ? <MainMenu updateUser={this.updateUser} logged={true} /> : <MainMenu updateUser={this.updateUser} hide={this.hidePopup} logged={false} />}
					<Switch>

						<Route exact path='/Social-app-ReactJS/'>
							{this.state.userLoggedIn ? <UserFeed /> : <GuestFeed />}
							{this.state.loaded ? this.state.userLoggedIn ? <Redirect to='/' /> : <Login popup={true} iconDisplay='block' hide={this.hidePopup} updateUser={this.updateUser} /> : null}
						</Route>

						<Route path='/Social-app-ReactJS/login'>{this.state.userLoggedIn ? <Redirect to='/' /> : <LoginPage updateUser={this.updateUser} />}</Route>

						<Route path='/Social-app-ReactJS/signup' component={SignUp} />

						<Route path='/Social-app-ReactJS/allFollows' component={AllFollows} />

						<Redirect to='/Social-app-ReactJS/' />
            
					</Switch>
				</S.App>
			</Router>
		);
	}
}

export default App;
