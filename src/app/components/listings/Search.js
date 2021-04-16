import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import '../../css/search.css'
import MyTextInput from '../form/MyTextInput'
import MyButton from '../form/MyButton';

const initialValues = {
    location: '', type: '',
    minRent: '', maxRent: '',
    minSize: '', maxSize: '',
    minRooms: '', maxRooms: '',
}

const validationSchema = Yup.object().shape({
    location: Yup.string().required().label('Location'),
    minRent: Yup.number().positive().required().label('Minimum Rent'),
    maxRent: Yup.number().positive().required().label('Maximum Rent'),
    minSize: Yup.number().positive().required().label('Minimum Size'),
    maxSize: Yup.number().positive().required().label('Maximum Size'),
    minRooms: Yup.number().positive().required().label('Minimun Rooms'),
})

const Search = ({ handleSearch, error }) => {
    return (
        <div className='wrapper search'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSearch(values)}
            >
                {() => (
                    <Form>
                        <div className='search-form'>
                            <MyTextInput name='minRent' label='Minimum Rent' placeholder='€/Month' />
                            <MyTextInput name='maxRent' label='Maximum Rent' placeholder='€/Month' />
                            <MyTextInput name='minSize' label='Minimum Size' placeholder='m²' />
                            <MyTextInput name='maxSize' label='Maximum Size' placeholder='m²' />
                            <MyTextInput name='minRooms' label='Minimun Rooms' placeholder='Rooms' />
                            <MyTextInput name='location' label='Location' placeholder='City Name' />
                        </div>

                        { error && <div className='search-error'>{ error }</div> }
                        
                        <MyButton label='Search' />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Search; 

