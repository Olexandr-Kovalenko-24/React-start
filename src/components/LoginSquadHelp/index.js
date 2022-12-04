import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SCHEMA } from '../../schemes/LoginSquadhelp';
import styles from './LoginSquad.module.scss'

const LoginSquadhelp = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    const formikSubmit = (data, formikBag) => {
        console.log(data);
        formikBag.resetForm();
    }

    return (
        <Formik onSubmit={formikSubmit}
            initialValues={initialValues}
            validationSchema={SCHEMA} >
            {(formikProps) => {
                return (
                    <div className={styles['signup-container']}>
                        <div className={styles['signup-info']}>
                            <h2>LOGIN TO YOUR ACCOUNT</h2>
                        </div>
                        <Form className={styles['signup-form']}>
                            <div className={styles['flex-row']}>
                                <Field className={styles.field} name="email" placeholder="Email address" />
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="email" component='span' className={styles.error} />
                            </div>
                            <div className={styles['flex-row']}>
                                <Field className={styles.field} name="password" placeholder="Password" />
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="password" component='span' className={styles.error} />
                            </div>
                            <div className={styles['check']}>
                                <Field type="checkbox" name="allow" className={styles.checkbox} />
                                <span className={styles['small-text']}>Remember Me</span>
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="allow" component='span' className={styles.error} />
                            </div>
                            <button className={styles['blue']} type='submit' >Login</button>
                            <button className={styles['red']}>Sign up with Google</button>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    );
}

export default LoginSquadhelp;
