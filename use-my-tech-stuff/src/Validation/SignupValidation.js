import * as yup from 'yup';

export default yup.object().shape({
    firstName: yup.string()
    .required('A first name is required'),
    lastName: yup.string()
    .required('A last name is required'),
    username: yup.string()
    .required('A username is required'),
    password: yup.string()
    .required('A password is required')
    .min(8, 'Password must be a minimum of 8 chars'),
})