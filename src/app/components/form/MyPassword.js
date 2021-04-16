import React from 'react'
import { Field, ErrorMessage } from 'formik'

const MyPassword = ({ name, label, placeholder }) => {
    return (
        <div className='password-input'>
            <label htmlFor={name}>{`${label}: `}</label>
            <Field name={name} type='password' placeholder={placeholder} className='password-field'/>
            
            <ErrorMessage name={name}>
                { msg => <div className='password-error'>{msg}</div> }
            </ErrorMessage>
        </div>
    )
}

export default MyPassword;

