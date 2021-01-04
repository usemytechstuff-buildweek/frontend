import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues ={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
}

const initialFormErrors ={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
}

const initialDisabled = true;

const SignUp = () =>{
    const [signUpForm, setSignUpForm] = useState(initialFormValues);
    const [signUpUser, setSignUpUser] = useState([]);
    const [signUpFormErrors, setSignUpFormErrors] = useState(initialFormErrors);
    const [signUpDisabled, setSignUpDisabled] = useState(initialDisabled);
    const history = useHistory();

    const registerNewUser = newUser =>{
        axios.post('/api/auth/register', newUser)
        .then((res) =>{
            setSignUpUser([...signUpUser, res.data]);
            setSignUpForm(initialFormValues);
        })
        .catch((err) =>{
            console.log(err, 'error');
        })

    }


    const changeSignUp = (name, value) =>{
        yup.reach()
        .validate()
        .then(() =>{

        })
        .catch(() =>{

        })
        setSignUpForm({})
    }



    const signUpFormSubmit = () =>{
        const newUser ={
            username:signUpForm.username.trim(),
            password:signUpForm.password.trim(),
            firstName:signUpForm.firstName.trim(),
            lastName:signUpForm.lastName.trim(),
        }
        registerNewUser(newUser);
    };

    const onSubmit = evt =>{
        evt.preventDefault();
        signUpFormSubmit();
    };

    const onChange = evt =>{
        const {name, value} = evt.target;
        changeSignUp(name, value)
    }



    return(
        <form onSubmit={onSubmit}>
            <div className='signup-page'>
                <div className='signup-form'>
                    <h2>Sign Up</h2>
                    <div className='signup-inputs'>

                        <label>First Name:
                            <input
                            type='text'
                            name='firstName'
                            value={signUpForm.firstName}
                            onChange={onChange}   
                            />
                        </label>

                        <label>Last Name:
                            <input
                            type='text'
                            name='lastName'
                            value={signUpForm.lastName}
                            onChange={onChange}   
                            />
                        </label>

                        <label>Username:
                            <input
                            type='text'
                            name='username'
                            value={signUpForm.username}
                            onChange={onChange}   
                            />
                        </label>

                        <label>Password:
                            <input
                            type='text'
                            name='password'
                            value={signUpForm.password}
                            onChange={onChange}   
                            />
                        </label>

                    </div>

                    <button disabled={signUpDisabled}>Submit</button>

                </div>
            </div>
        
        </form>
    )

};

export default SignUp;