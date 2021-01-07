import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import LoginValidation from '../Validation/LoginValidation';
import { BACKEND_LINK } from "../constants";

const initialLogin = {
    username: '',
    password: '',
    userType: "",
}

const initialLoginError = {
    username: '',
    password: '',
    userType: "",
}

const initialDisabled = true;

const Login = () => {
    const [loginForm, setLoginForm] = useState(initialLogin);
    const [loginFormError, setLoginFormError] = useState(initialLoginError);
    const [loginDisabled, setLoginDisabled] = useState(initialDisabled);

    //will 
    const history = useHistory();



    const loginUser = user => {
        axios.post(`${BACKEND_LINK}/auth/login`, user) //using api link
            .then(res => {
                localStorage.setItem("token", res.data.token); //grabbing JWT to use for authentication
                history.push("/tech-protected");
            })
            .catch((err) => {
                console.log(err);
            });;
    }

    const loginInputChange = (name, value) => {
        yup.reach(LoginValidation, name)
            .validate(value)
            .then(() => {
                setLoginFormError({
                    ...loginFormError,
                    [name]: '',
                })
            })
            .catch((err) => {
                setLoginFormError({
                    ...loginFormError,
                    [name]: err.errors[0]
                })
            })
        setLoginForm({
            ...loginForm, [name]: value
        });
    }

    const loginSubmit = () => {
        const newLoginUser = {
            username: loginForm.username.trim(),
            password: loginForm.password.trim(),
        }
        loginUser(newLoginUser);
    }

    useEffect(() => {
        LoginValidation.isValid(loginForm).then((valid) => {
            setLoginDisabled(!valid);
        });
    }, [loginForm])

    const onSubmit = evt => {
        evt.preventDefault();
        loginSubmit();
        history.push('/tech-protected')
    }

    const onChange = evt => {
        const { name, value } = evt.target;
        loginInputChange(name, value);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='login-page'>
                <h2>Login</h2>
                <div className='errors'>
                    <p>{loginFormError.username}</p>
                    <p>{loginFormError.password}</p>
                </div>

                <div className='login-inputs'>

                    <label>Username:
                    <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={loginForm.username}
                            onChange={onChange}
                        />
                    </label>

                    <label>Password:
                <input
                            type='text'
                            name='password'
                            placeholder='Password'
                            value={loginForm.password}
                            onChange={onChange}
                        />
                    </label>

                </div>

                <button disabled={loginDisabled}>Log In</button>
            </div>
        </form>
    )

};

export default Login;