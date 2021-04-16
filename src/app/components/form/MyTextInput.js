import React from 'react'
import { Field, ErrorMessage } from 'formik'

const MyTextInput = ({ name, label, placeholder }) => {
    return (
        <div className='text-input'>
            <label htmlFor={name}>{ label }: </label>
            
            <Field name={name} type='text' placeholder={placeholder} className='text-field' />

            <ErrorMessage name={name}>
                { msg => <div className='text-error'>{msg}</div> }
            </ErrorMessage>
        </div>
    )
}

export default MyTextInput;

