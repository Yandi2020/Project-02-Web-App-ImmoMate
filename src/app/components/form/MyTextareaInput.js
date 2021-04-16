import React from 'react'
import { Field, ErrorMessage } from 'formik'

const MyTextareaInput = ({ name, label, placeholder, cols, rows }) => {
    return (
        <div className='textarea-input'>
            { label && <label htmlFor={name}>{ `${label}: ` }</label> }
            
            <Field 
                name={name} 
                component='textarea' 
                placeholder={placeholder} 
                cols={cols}
                rows={rows}
                className='textarea-field' 
            />
            
            <ErrorMessage name={name}>
                { msg => <div className='textarea-error'>{msg}</div> }
            </ErrorMessage>
        </div>
    )
}

export default MyTextareaInput;

