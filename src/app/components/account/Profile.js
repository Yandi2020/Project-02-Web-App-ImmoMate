import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { connect } from 'react-redux'
import { updatePassword } from '../../actions/authActions'
import { Redirect } from 'react-router-dom'

import '../../css/profile.css'
import man from '../../../assets/user-man.png'
import woman from '../../../assets/user-woman.png'
import MyPassword from '../form/MyPassword'
import MyButton from '../form/MyButton'

const Profile = ({ users, auth, authError, updatePassword }) => {
    if(!auth.uid) return <Redirect to='/login' />
    
    const id = auth.uid;
    const user = users[id];
    
    const initialValues = {
        oldPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    }

    const validationSchema = Yup.object().shape({
        oldPassword: Yup.string().required().label('Old Password'),
        newPassword: Yup.string().required().label('New Password'),
        newPasswordConfirmation: Yup.string().oneOf([Yup.ref('newPassword'), null], 'New Password must match'),
    })

    return (
        <div className='wrapper profile'>
            <div className='user-container'>
                { user.gender === 'Mr.' ?
                     (<img src={man} alt='img' />) : (<img src={woman} alt='img' />) }

                <div className='user'>
                    <div className='name'>{`${user.firstName} ${user.lastName}`}</div>
                    <div className='email'>{user.email}</div>
                </div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => updatePassword(values)}
            >
                {() => (
                    <Form className='form'>
                        <h4>Update Password</h4>

                        <MyPassword 
                            name='oldPassword'
                            label='Old Password'
                            placeholder='old password'
                        />

                        <MyPassword 
                            name='newPassword'
                            label='New Password'
                            placeholder='new password'
                        />

                        <MyPassword 
                            name='newPasswordConfirmation'
                            label='New Password Confirmation'
                            placeholder='new password confirmation'
                        />

                        { authError && <div className='auth-error'>{ authError }</div>}

                        <MyButton label='Submit' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.data.users,
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: (values) => dispatch(updatePassword(values))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

