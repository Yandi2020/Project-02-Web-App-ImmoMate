import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import { connect } from 'react-redux'
import { createListing } from '../../actions/listingActions'
import { useHistory, Redirect } from 'react-router-dom'

import '../../css/post-listing.css'
import ImageInput from '../form/ImageInput'
import MyTextInput from '../form/MyTextInput'
import MyEmailInput from '../form/MyEmailInput'
import MySelectInput from '../form/MySelectInput';
import MyTextareaInput from '../form/MyTextareaInput';
import MyButton from '../form/MyButton';

const initialValues = {
    title: '', type: '', price: '',
    size: '', rooms: '', address: '',
    gender: '', firstName: '', lastName: '',
    company: '', phone: '', email: '',
    description: '', 
    images: ''
}

const validationSchema = Yup.object().shape({ 
    title: Yup.string().required().min(5).label('Title'),
    type: Yup.string().required().label('Type'),
    price: Yup.number().positive().required().min(1).label('Price'),
    size: Yup.number().positive().required().min(1).label('Size'),
    rooms: Yup.number().positive().required().min(1).label('Rooms'),
    address: Yup.string().required().min(5).label('Address'),

    gender: Yup.string().required().label('Gender'),
    firstName: Yup.string().required().label('First Name'),
    lastName: Yup.string().required().label('Last Name'),
    company: Yup.string().label('Company'),
    phone: Yup.number().positive().integer().required().label('Phone'),
    email: Yup.string().email().required().label('Email'),

    description: Yup.string().label('Description'),
})

const PostListing = ({ createListing, auth, listingError }) => {
    //using async, after submit we have return, then we can add then()
    //otherwise it says cannot use then() because return is null 
    //Or we can directly push to home page after submit, without async then() 
    const handleSubmit = async (values) => {
        createListing(values)
    }

    const history = useHistory();

    if(!auth.uid) return <Redirect to='/login'/>

    return (
        <div className='wrapper post-listing'>
            <h3>Post New Offer</h3>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ (values) => {
                    handleSubmit(values).then(() => history.push('/'))
                } }
            >
                {() => (
                    <Form>
                        <ImageInput />

                        <div className='information'>
                            <div className='title'>
                                <InfoOutlinedIcon className='icon' />
                                <h4>Information</h4>
                            </div>

                            <div className='inputs'>
                                <MyTextInput name='title' label='Title' placeholder='name of your property' />
                                <MySelectInput 
                                    name='type' 
                                    label='Type' 
                                    optionOne={{value: 'apartment', label: 'Apartment'}} 
                                    optionTwo={{value: 'house', label: 'House'}} 
                                />
                                <MyTextInput name='price' label='Price' placeholder='€/month' />
                                <MyTextInput name='size' label='Size' placeholder='m²' />
                                <MyTextInput name='rooms' label='Rooms' placeholder='rooms' />
                                <MyTextInput name='address' label='Address' placeholder='address' />
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='title'>
                                <ChatOutlinedIcon className='icon' />
                                <h4>Contact</h4>
                            </div>

                            <div className='inputs'>
                                <MySelectInput 
                                    name='gender' 
                                    label='Gender'
                                    optionOne={{value: 'Mr.', label: 'Mr.'}} 
                                    optionTwo={{value: 'Ms.', label: 'Ms.'}}
                                />
                                <MyTextInput name='firstName' label='First Name' placeholder='first name' />
                                <MyTextInput name='lastName' label='Last Name' placeholder='last name' />
                                <MyTextInput name='company' label='Company Name' placeholder='company / private' />
                                <MyTextInput name='phone' label='Phone' placeholder='phone number' />
                                <MyEmailInput />
                            </div>
                        </div>

                        <div className='description'>
                            <div className='title'>
                                <CreateOutlinedIcon className='icon' />
                                <h4>Description</h4>
                            </div>

                            <MyTextareaInput 
                                name='description' 
                                placeholder='property description' 
                                cols='70'
                                rows='10'
                            />
                        </div>

                        { listingError && <div className='listing-error'>{ listingError }</div> }

                        <MyButton label='Submit' />
                    </Form>
                )}
            </Formik> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listingError: state.listing.listingError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createListing: (listing) => dispatch(createListing(listing))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListing);

