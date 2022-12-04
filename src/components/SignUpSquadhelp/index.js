import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './SignUpSquad.module.scss';
import { SCHEMA } from '../../schemes/SignUpSquadhelp';

const SignUpSquadhelp = () => {

    const formikSubmit = (data, formikBag) => {
        console.log(data);
        formikBag.resetForm();
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        joinAs: '',
        allow: ''
    }

    return (
        <Formik onSubmit={formikSubmit}
            initialValues={initialValues}
            validationSchema={SCHEMA}>
            {(formikProps) => {
                return (
                    <div className={styles['signup-container']}>
                        <div className={styles['signup-info']}>
                            <h2>CREATE AN ACCOUNT</h2>
                            <h4>We always keep your name and email address private.</h4>
                        </div>
                        <Form className={styles['signup-form']}>
                            <div className={styles['flex-row']}>
                                <Field className={styles.field} name="firstName" placeholder="First name" />
                                <Field className={styles.field} name="lastName" placeholder="Last name" />
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="firstName" component='div' className={styles.error} />
                                <ErrorMessage name="lastName" component='span' className={styles.error} />
                            </div>
                            <div className={styles['flex-row']}>
                                <Field className={styles.field} name="displayName" placeholder="Display name" />
                                <Field className={styles.field} name="email" placeholder="Email address" />
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="displayName" component='span' className={styles.error} />
                                <ErrorMessage name="email" component='span' className={styles.error} />
                            </div>
                            <div className={styles['flex-row']}>
                                <Field className={styles.field} name="password" placeholder="Password" />
                                <Field className={styles.field} name="passwordConfirm" placeholder="Password Confirmation" />
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="password" component='span' className={styles.error} />
                                <ErrorMessage name="passwordConfirm" component='span' className={styles.error} />
                            </div>
                            <div className={styles['join-as']}>
                                <Field type="radio" name="joinAs" value="Join As a Buyer" /> Join As a Buyer
                                <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="joinAs" component='span' className={styles.error} />
                            </div>
                            <div className={styles['join-as']}>
                                <Field type="radio" name="joinAs" value="Join As a Creative or Marketplace Seller" /> Join As a
                                Creative or Marketplace Seller
                                <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplsce</p>
                            </div>
                            <div className={styles['check']}>
                                <Field type="checkbox" name="allow" className={styles.checkbox} />
                                <span className={styles['small-text']}>Allow Squadhelp to send
                                    marketing/promotional offers from time to
                                    time</span>
                            </div>
                            <div className={styles['flex-row']}>
                                <ErrorMessage name="allow" component='span' className={styles.error} />
                            </div>
                            <button className={styles['blue']} type='submit' >Create account</button>
                            <h5>By clicking this button, you agree to our Terms of service</h5>
                            <button className={styles['red']} >Sign up with Google</button> 
                        </Form>
                    </div>
                )
            }}
        </Formik>
    );
}

export default SignUpSquadhelp;
