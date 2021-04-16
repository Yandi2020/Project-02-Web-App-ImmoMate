import React from 'react'
import { Link } from 'react-router-dom'

import '../css/footer.css'
import fb from '../../assets/fb-icon.png'
import tw from '../../assets/tw-icon.png'
import ytb from '../../assets/ytb-icon.png'

const Footer = () => {
    return (
        <div className='wrapper footer'>
            <ul className='social'>
                <li><img src={fb} alt='facebook' /></li>
                <li><img src={tw} alt='twitter' /></li>
                <li><img src={ytb} alt='youtube' /></li>
            </ul>

            <div className='copy' >&copy; Copyright 2021 ImmoMate</div>
            
            <ul className='links'>
                <li><Link to='/' className='term'>Terms of Use</Link></li>
                <li><Link to='/' className='term'>Privacy Policy</Link></li>
            </ul>
        </div>
    )
}

export default Footer;

