import React from 'react';
import Login from '../Components/Login';

const LoginPage = (props) => {
	return <Login popup={false} iconDisplay='none' updateUser={props.updateUser} />;
};

export default LoginPage;
