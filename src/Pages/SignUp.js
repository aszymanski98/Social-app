import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import S from '../Styles/Forms';
import '../Styles/inputs.css';

const SignUp = () => {
	const { register, handleSubmit, errors, getValues } = useForm();
	const [userUsed, setUser] = useState(false);
	const [emailUsed, setEmail] = useState(false);
	const [signed, setSigned] = useState(false);

	const headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	};

	const onSubmit = (data) => {
		setUser(false);
		setEmail(false);
		setSigned(false);

		let newUser = {
			username: data.username,
			email: data.email,
			password: data.password,
		};

		axios
			.post('http://akademia108.pl/api/social-app/user/signup', JSON.stringify(newUser), { headers: headers })
			.then((req) => {
				if (req.data.signedup === false) {
					if (req.data.message.username) {
						setUser(true);
					}
					if (req.data.message.email) {
						setEmail(true);
					}
				} else {
					setSigned(true);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<S.Holder>
			<S.Heading>Sign Up</S.Heading>
			<S.Form_wrapper>
				<form onSubmit={handleSubmit(onSubmit)}>
					<S.Input_wrapper>
						<input
							name='username'
							type='text'
							placeholder=' '
							ref={register({
								required: true,
								minLength: 4,
								pattern: {
									value: /^[^\s]*$/,
								},
							})}
						/>
						<S.Label htmlFor='username'>Username</S.Label>
						{errors.username && errors.username.type === 'required' && <S.Errors> &#9888; This field is required</S.Errors>}
						{errors.username && errors.username.type === 'minLength' && <S.Errors> &#9888; User name is too short</S.Errors>}
						{errors.username && errors.username.type === 'pattern' && <S.Errors> &#9888; Do not use white spaces</S.Errors>}
						{userUsed ? <S.Errors> &#9888; User name has already been taken</S.Errors> : null}
					</S.Input_wrapper>

					<S.Input_wrapper>
						<input
							name='email'
							type='text'
							placeholder=' '
							ref={register({
								required: true,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								},
							})}
						/>
						<S.Label htmlFor='email'>E-mail adress</S.Label>
						{errors.email && errors.email.type === 'required' && <S.Errors> &#9888; This field is required</S.Errors>}
						{errors.email && errors.email.type === 'pattern' && <S.Errors> &#9888; Email adress is invalid</S.Errors>}
						{emailUsed ? <S.Errors> &#9888; Email adress has already been taken</S.Errors> : null}
					</S.Input_wrapper>

					<S.Input_wrapper>
						<input
							name='password'
							type='password'
							placeholder=' '
							ref={register({
								required: true,
								minLength: 6,
								pattern: {
									value: /^[0-zA-Z$&+,:;=?@#|'<>.^*()%!]*$/,
								},
								validate: (value) => {
									let regex = /\d/;
									if ((value.includes('$') || value.includes('!') || value.includes('#') || value.includes('@') || value.includes('%')) && regex.test(value)) {
										return true;
									} else {
										return false;
									}
								},
							})}
						/>
						<S.Label htmlFor='password'>Password</S.Label>
						{errors.password && errors.password.type === 'required' && <S.Errors> &#9888; This field is required</S.Errors>}
						{errors.password && errors.password.type === 'minLength' && <S.Errors> &#9888; Password is too short</S.Errors>}
						{errors.password && errors.password.type === 'validate' && <S.Errors> &#9888; Password must contain one of charts: ! # @ $ %</S.Errors>}
						{errors.password && errors.password.type === 'pattern' && <S.Errors> &#9888; Do not use white spaces</S.Errors>}
					</S.Input_wrapper>

					<S.Input_wrapper>
						<input
							name='confirmPassword'
							type='password'
							placeholder=' '
							ref={register({
								required: true,
								validate: (value) => value === getValues('password'),
							})}
						/>
						<S.Label htmlFor='confirmPassword'>Confirm password</S.Label>
						{errors.confirmPassword && errors.confirmPassword.type === 'validate' && <S.Errors> &#9888; Password is not the same</S.Errors>}
						{errors.confirmPassword && errors.confirmPassword.type === 'required' && <S.Errors> &#9888; This field is required</S.Errors>}
					</S.Input_wrapper>

					{signed ? <S.Signed>You signed up successfully!</S.Signed> : null}

					<S.Button_holder>
						{signed ? (
							<S.Button type='submit' style={{ marginTop: '0px' }}>
								Sign up
							</S.Button>
						) : (
							<S.Button type='submit'>Sign up</S.Button>
						)}
					</S.Button_holder>
				</form>
			</S.Form_wrapper>
		</S.Holder>
	);
};

export default SignUp;
