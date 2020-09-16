import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import S from '../Styles/Forms';
import '../Styles/inputs.css';

const Login = (props) => {
	const { register, handleSubmit, errors } = useForm();

	const [passwordShown, setPasswordShown] = useState(false);

	const onSubmit = (data) => {
		let newUser = {
			username: data.username.trim(),
			password: data.password,
			ttl: 3600,
		};

		const headers = {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		};

		axios
			.post('https://akademia108.pl/api/social-app/user/login', JSON.stringify(newUser), { headers: headers })
			.then((req) => {
				localStorage.setItem('user', JSON.stringify(req.data));
				props.updateUser(true);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	let color = 'transparent';

	if (props.popup) {
		color = '#0B0C10';
	}

	const togglePasswordVisiblity = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	return (
		<S.Holder color={color}>
			<S.Icon icon={faTimes} onClick={props.hide} display={props.iconDisplay} />
			<S.Heading>Log in</S.Heading>
			<S.Form_wrapper>
				<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
					<S.Input_wrapper>
						<input
							name='username'
							type='text'
							placeholder=' '
							ref={register({
								required: true,
							})}
						/>
						<S.Label htmlFor='username'>Username</S.Label>
						{errors.username && errors.username.type === 'required' && <S.Errors> &#9888; This field is required</S.Errors>}
					</S.Input_wrapper>

					<S.Input_wrapper>
						{passwordShown ? (
							<S.EyeIcon
								onClick={() => {
									togglePasswordVisiblity();
								}}
								icon={faEyeSlash}
							/>
						) : (
							<S.EyeIcon
								onClick={() => {
									togglePasswordVisiblity();
								}}
								icon={faEye}
							/>
						)}

						<input
							name='password'
							type={passwordShown ? 'text' : 'password'}
							placeholder=' '
							ref={register({
								required: true,
							})}
						/>
						<S.Label htmlFor='username'>Password</S.Label>
						{errors.password && errors.password.type === 'required' && <S.Errors> &#9888; This field is required</S.Errors>}
					</S.Input_wrapper>

					<S.Button_holder>
						<S.Button type='submit'>Log in</S.Button>
					</S.Button_holder>
				</form>
			</S.Form_wrapper>

			<S.Span>Don't have an account? </S.Span>
			<S.Link to='/signup'>Sign up</S.Link>
		</S.Holder>
	);
};

export default Login;
