import React from 'react'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import '../css/about.css'

const Contact = () => {
    return (
        <div className='wrapper contact'>
            <h3>We are here for you</h3>

            <div className='section'>
                <div className='icon-container'>
                    <ArrowForwardIosOutlinedIcon className='icon' />
                </div>
                <div>
                    <h4>Telephone: </h4>
                    <p>0800 253 325 5555</p>
                </div>
            </div>

            <div className='section'>
                <div className='icon-container'>
                    <ArrowForwardIosOutlinedIcon className='icon' />
                </div>
                <div>
                    <h4>Email: </h4>
                    <p>info@immo-mate.com</p>
                </div>
            </div>

            <div className='section'>
                <div className='icon-container'>
                    <ArrowForwardIosOutlinedIcon className='icon' />
                </div>
                <div>
                    <h4>Post Address: </h4>
                    <p>Immo-Mate Post Center, 10587 Berlin</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;

