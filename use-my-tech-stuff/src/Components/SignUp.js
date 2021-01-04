import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import SignUpValidation from '../Validation/SignupValidation';

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
        yup.reach(SignUpValidation, name)
        .validate(value)
        .then(() =>{
            setSignUpFormErrors({
                ...signUpFormErrors,
                [name]: '',
            });
        })
        .catch(() =>{
            setSignUpFormErrors({
                ...setSignUpFormErrors,
                [name]: err.errors[0]
            })
        })
        setSignUpForm({
            ...signUpForm,
            [name]: value
        });
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


    useEffect(() =>{
        SignUpValidation.isValid(signUpForm).then((valid) =>{
            setSignUpDisabled(!valid);
        })
    },[signUpForm])



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

                    <div className="errors">
                        <p>{signUpFormErrors.firstName}</p>
                        <p>{signUpFormErrors.lastName}</p>
                        <p>{signUpFormErrors.email}</p>
                        <p>{signUpFormErrors.password}</p>
                    </div>

                    <div className='signup-inputs'>

                        <label>First Name:
                            <input
                            type='text'
                            name='firstName'
                            placeholder='First Name'
                            value={signUpForm.firstName}
                            onChange={onChange}   
                            />
                        </label>

                        <label>Last Name:
                            <input
                            type='text'
                            name='lastName'
                            placeholder='Last Name'
                            value={signUpForm.lastName}
                            onChange={onChange}   
                            />
                        </label>

                        <label>Username:
                            <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={signUpForm.username}
                            onChange={onChange}   
                            />
                        </label>

                        <label>Password:
                            <input
                            type='text'
                            name='password'
                            placeholder='Password'
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