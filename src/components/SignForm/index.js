import React, { useReducer } from 'react';
import { reducer } from '../../reducers';
import CONSTANS from '../../constants';
const {ACTIONS} = CONSTANS;

const SignForm = () => {

    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
        agreement: false
    })

    const changeHandler = ({ target: { name, value } }) => {
        const action = {
            value,
            name,
            type: ACTIONS.INPUT_CHANGE
        };
        dispatch(action);
    }

    const submitForm = () => {

    }

    return (
        <form>
            <input type='text' name='firstName' placeholder='firstName' onChange={changeHandler} value={state.firstName}/>
            <input type='text' name='lastName' placeholder='lastName' onChange={changeHandler} value={state.lastName}/>
            <input type='text' name='email' placeholder='email' onChange={changeHandler} value={state.email}/>
            <input type='text' name='password' placeholder='password' onChange={changeHandler} value={state.password}/>
            <input type='text' name='repassword' placeholder='repassword' onChange={changeHandler} value={state.repassword}/>
            <label>
                <input type='checkbox' name='agreement' />
                Do you agree with rules?
            </label>
            <button>Submit</button>
        </form>
    );
}

export default SignForm;
