import * as yup from 'yup';

export const SCHEMA = yup.object({
    email: yup.string().required().min(1).max(50).email('Please check the format of email address'),
    password: yup.string().required().min(8).max(200).
    matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
    'Pass must contains at least one big and small letter, number and symbol'),
    allow: yup.boolean()
})