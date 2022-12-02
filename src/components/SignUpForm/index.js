import React, { Component } from 'react';
import styles from './SignUp.module.css';
import { Formik, Form, Field } from 'formik';

function SignUpForm(props) {

    const formikSubmit = (data, formikBag) => {
        console.log(data, formikBag)
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        pass: ''
    };

    return (
        <Formik initialValues={initialValues}
            onSubmit={formikSubmit}>
            {(formikProps) => {
                return (
                    <Form className={styles.form}>
                        <Field 
                        name='firstName'
                        placeholder='firstName'
                        />
                        <Field 
                        name='lastName'
                        placeholder='lastName'
                        />
                        <Field 
                        name='email'
                        placeholder='email'
                        />
                        <Field 
                        name='pass'
                        placeholder='pass'
                        />
                        <button>Send</button>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default SignUpForm;
