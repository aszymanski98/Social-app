import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

import Form from './styles/Forms';

const SignUp = () => {

    const { register, handleSubmit, errors, getValues } = useForm();
    const [userUsed, setUser] = useState(false);
    const [emailUsed, setEmail] = useState(false);
    const [signed, setSigned] = useState(false);

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const onSubmit = data => {

        setUser(false);
        setEmail(false);
        setSigned(false);

        let newUser = {
            username: data.username,
            email: data.email,
            password: data.password,
        }

        axios.post(
            'http://akademia108.pl/api/social-app/user/signup',
            JSON.stringify(newUser),
            { 'headers': headers })
            .then((req) => {
                if (req.data.signedup === false) {
                    if (req.data.message.username) { setUser(true); }
                    if (req.data.message.email) { setEmail(true); }
                } else {
                    setSigned(true);
                }
            }).catch((error) => {
                console.error(error);
            })
    }

    return (
        <Form.Holder>
            <Form.Heading>Sign Up</Form.Heading>
            <Form.Form_wrapper>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Input name="username" type="text" placeholder="User name"
                        ref={register({
                            required: true,
                            minLength: 4,
                            pattern: {
                                value: /^[^\s]*$/,
                            },

                        })} />
                    {errors.username && errors.username.type === "required" && <Form.Errors> &#9888; This field is required</Form.Errors>}
                    {errors.username && errors.username.type === "minLength" && <Form.Errors> &#9888; User name is too short</Form.Errors>}
                    {errors.username && errors.username.type === "pattern" && <Form.Errors> &#9888; Do not use white spaces</Form.Errors>}
                    {userUsed ? <Form.Errors> &#9888; User name has already been taken</Form.Errors> : null}

                    <Form.Input name="email" type="text" placeholder="E-mail adress" ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                    })} />
                    {errors.email && errors.email.type === "required" && <Form.Errors> &#9888; This field is required</Form.Errors>}
                    {errors.email && errors.email.type === "pattern" && <Form.Errors> &#9888; Email adress is invalid</Form.Errors>}
                    {emailUsed ? <Form.Errors> &#9888; Email adress has already been taken</Form.Errors> : null}

                    <Form.Input name="password" type="password" placeholder="Password" ref={register({
                        required: true,
                        minLength: 6,
                        pattern: {
                            value: /^[0-zA-Z$&+,:;=?@#|'<>.^*()%!]*$/,
                        },
                        validate: value => {
                            let regex = /\d/;
                            if ((value.includes('$') || value.includes('!') || value.includes('#') || value.includes('@') || value.includes('%')) && regex.test(value)) {
                                return true;
                            } else { return false; }
                        },

                    })} />
                    {errors.password && errors.password.type === "required" && <Form.Errors> &#9888; This field is required</Form.Errors>}
                    {errors.password && errors.password.type === "minLength" && <Form.Errors> &#9888; Password is too short</Form.Errors>}
                    {errors.password && errors.password.type === "validate" && <Form.Errors> &#9888; Password must contain a number and one of special charts</Form.Errors>}
                    {errors.password && errors.password.type === "pattern" && <Form.Errors> &#9888; Do not use white spaces</Form.Errors>}

                    <Form.Input name="confirmPassword" type="password" placeholder="Confirm password" ref={register({
                        required: true,
                        validate: value => value === getValues('password'),
                    })} />
                    {errors.confirmPassword && errors.confirmPassword.type === "validate" && <Form.Errors> &#9888;     Password is not the same</Form.Errors>}
                    {errors.confirmPassword && errors.confirmPassword.type === "required" && <Form.Errors> &#9888; This field is required</Form.Errors>}
                    {signed ? <Form.Signed>You signed up successfully!</Form.Signed> : null}

                    <Form.Button_holder>
                        {signed ? <Form.Button type="submit" style={{ "marginTop": "0px" }}>Sign up</Form.Button> : <Form.Button type="submit">Sign up</Form.Button>}
                    </Form.Button_holder>
                    
                </form>
            </Form.Form_wrapper>
        </Form.Holder>
    );
}

export default SignUp;