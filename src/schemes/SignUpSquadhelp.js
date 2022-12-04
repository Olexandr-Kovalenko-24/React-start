import * as yup from 'yup';

export const SCHEMA = yup.object({
    firstName: yup.string().required('Field cannot be empty').min(1).max(50),
    lastName: yup.string().required('Field cannot be empty').min(1).max(50),
    displayName: yup.string().required('Display name should be more than 4 characters').min(1).max(50),
    email: yup.string().required().min(1).max(50).email('Please check the format of email address'),
    password: yup.string().required().min(8).max(200).
    matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
    'Pass must contains at least one big and small letter, number and symbol'),
    passwordConfirm: yup.string().required().min(8).max(200).
    matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
    'Password confirmation needs to match original password'),
    joinAs: yup.string().required('Please specify whether you are a Creative or a Buyer'),
    allow: yup.boolean()
})