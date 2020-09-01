import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainMenu from "./MainMenu";
import Login from "./Login";
import SignUp from "./SignUp";
import UserFeed from './Feeds/UserFeed';
import GuestFeed from './Feeds/GuestFeed';

import S from './styles/App';

class App extends Component {

  constructor() {
    super();
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.state = {
      userLoggedIn: (this.currentUser) ? true : false,
      loaded: false
    }

  }
  hidePopup = () => {
    this.setState({ loaded: false });
  }

  updateUser = (isLogged) => {
    this.setState({ userLoggedIn: isLogged });
    this.timerPopup();
  }

  timerPopup = () => {
    this.setState({ loaded: false });

    this.timerID = setTimeout(() => {
      this.setState({ loaded: true });
    }, 10000)

  }

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
          <MainMenu updateUser={this.updateUser} />

          <Switch>
            <Route exact path="/">
              {this.state.userLoggedIn ? <UserFeed /> : <GuestFeed />}
              {this.state.loaded ? this.state.userLoggedIn ? <Redirect to="/" /> : <Login popup={true} iconDisplay="block" hide={this.hidePopup} updateUser={this.updateUser} /> : null}
            </Route>

            <Route path="/login">
              {this.state.userLoggedIn ? <Redirect to="/" /> : <Login popup={false} iconDisplay="none" updateUser={this.updateUser} />}
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>

        </S.App>
      </Router>
    )
  }
}

export default App;
