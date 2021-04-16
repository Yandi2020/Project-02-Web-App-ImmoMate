import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'
import { register } from '../../actions/authActions'
import { Redirect, useHistory } from 'react-router-dom'

import '../../css/register.css'
import MySelectInput from '../form/MySelectInput'
import MyTextInput from '../form/MyTextInput'
import MyEmailInput from '../form/MyEmailInput'
import MyPassword from '../form/MyPassword'
import MyButton from '../form/MyButton'

const initialValues = {
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
}

const validationSchema = Yup.object().shape({
    gender: Yup.string().required().label('Title'),
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name'),
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().label('Password'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match'),
});

const Register = ({ register, auth, authError }) => {
    const history = useHistory();

    if(auth.uid) return <Redirect to='/' />

    return (
        <div className='wrapper register'>
            <h3>New User</h3>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    register(values).then(() => history.push('/'))
                }}
            >
                {() => (
                    <Form>
                        <MySelectInput 
                            name='gender'
                            label='Title'
                            optionOne={{ value: 'Mr.', label: 'Mr.' }}
                            optionTwo={{  value: 'Ms.', label: 'Ms.' }}
                        />

                        <MyTextInput 
                            name='firstName'
                            label='First Name'
                            placeholder='first name'
                        />

                        <MyTextInput 
                            name='lastName'
                            label='Last Name'
                            placeholder='last name'
                        />

                        <MyEmailInput />

                        <MyPassword 
                            name='password'
                            label='Password'
                            placeholder='password'
                        />

                        <MyPassword 
                            name='passwordConfirmation'
                            label='Password Confirmation'
                            placeholder='password confirmation'
                        />

                        { authError && <div className='auth-error'>{ authError }</div> }

                        <MyButton label='Register' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

