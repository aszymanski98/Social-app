import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

import Form from '../Styles/Forms';

const Icon = styled(FontAwesomeIcon)`
        font-size: 30px;
        position: absolute;
        display: ${props => props.display};
        color: #66FCF1;
        right: 10px;
        top: 10px;
        cursor: pointer;
    `;

const Login = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        let newUser = {
            username: data.username.trim(),
            password: data.password,
            ttl: 3600
        }

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        axios.post(
            'https://akademia108.pl/api/social-app/user/login',
            JSON.stringify(newUser),
            { 'headers': headers })
            .then((req) => {
                localStorage.setItem('user', JSON.stringify(req.data));
                props.updateUser(true);
            }).catch((error) => {
                console.error(error);
            })
    }

    let color = 'transparent';

    if (props.popup) {
        color = '#0B0C10';
    }

    return (
        <Form.Holder color={color}>
            <Icon icon={faTimes} onClick={props.hide} display={props.iconDisplay}/>
            <Form.Heading>Log in</Form.Heading>
            <Form.Form_wrapper>
                <form className="login-form" onSubmit={handleSubmit(onSubmit)} >

                    <Form.Input className="login-input" name="username" type="text" placeholder="User name"
                        ref={register({
                            required: true,
                        })} />
                    {errors.username && errors.username.type === "required" && <Form.Errors> &#9888; This field is required</Form.Errors>}

                    <Form.Input className="login-input" name="password" type="password" placeholder="Password"
                        ref={register({
                            required: true,
                        })} />
                    {errors.password && errors.password.type === "required" && <Form.Errors> &#9888; This field is required</Form.Errors>}

                    <Form.Button_holder>
                        <Form.Button className="login-btn" type="submit">Log in</Form.Button>
                    </Form.Button_holder>
                </form>
            </Form.Form_wrapper>
        </Form.Holder>
    );
}

export default Login;
