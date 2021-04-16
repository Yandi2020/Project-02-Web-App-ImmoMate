import React from 'react'
import { Field, ErrorMessage } from 'formik'

const MyEmailInput = () => {
    return (
        <div className='email-input'>
            <label htmlFor='email'>Email: </label>
            <Field name='email' type='email' placeholder='email address' className='email-field'/>
            
            <ErrorMessage name='email'>
                { msg => <div className='email-error'>{msg}</div> }
            </ErrorMessage>
        </div>
    )
}

export default MyEmailInput;





