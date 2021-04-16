import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'
import { login } from '../../actions/authActions'
import { Redirect, useHistory } from 'react-router-dom'

import '../../css/login.css'
import MyEmailInput from '../form/MyEmailInput'
import MyPassword from '../form/MyPassword'
import MyButton from '../form/MyButton'

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().label('Password'),
});

const Login = ({ login, auth, authError }) => {
    const history = useHistory();

    if(auth.uid) return <Redirect to='/' />

    return (
        <div className='wrapper login'>
            <h3>Welcome Back</h3>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    login(values).then(() => history.push('/'))
                }}
            >
                {() => (
                    <Form>
                        <MyEmailInput />

                        <MyPassword 
                            name='password'
                            label='Password'
                            placeholder='password'
                        />

                        { authError && <div className='auth-error'>{ authError }</div> }
                        
                        <MyButton label='Login' />
                        
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (credentials) => dispatch(login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

