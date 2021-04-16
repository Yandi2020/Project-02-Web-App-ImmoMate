import React from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const MySelectInput = ({ name, optionOne, optionTwo, label }) => {
    const { setFieldValue } = useFormikContext();
    
    const onChange = (e) => {
        //in select still use e.target.value to capture result
        let result = e.target.value;
        setFieldValue(name, result);
    }

    return (
        <div className='select-input'>
            { label && <label htmlFor={name}>{ `${label}: ` }</label> }

            <Field name={name} component='select' onChange={onChange} className='select-field'>
                <option> ---- select ---- </option>
                <option value={optionOne.value}>{ optionOne.label }</option>
                <option value={optionTwo.value}>{ optionTwo.label }</option>
            </Field>

            <ErrorMessage name={name}>
                { msg => <div className='select-error'>{msg}</div> }
            </ErrorMessage>
        </div>
    )
}

export default MySelectInput;

