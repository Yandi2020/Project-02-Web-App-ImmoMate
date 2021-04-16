import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux'

import '../css/nav.css'
import logo from '../../assets/Logo-IM-light.svg'
import PostLink from './PostLink'
import AccountLink from './AccountLink'
import LogLinks from './LogLinks'

const overHandler = () => {
    const burgerContainer = document.querySelector('.nav .burger-container');
    const burgerList = document.querySelector('.nav .burger-container .burger-list');

    burgerContainer.addEventListener('mouseover', () => {
        burgerList.classList.add('open');
    })
}

const leaveHandler = () => {
    const burgerContainer = document.querySelector('.nav .burger-container');
    const burgerList = document.querySelector('.nav .burger-container .burger-list');

    burgerContainer.addEventListener('mouseleave', () => {
        burgerList.classList.remove('open');
    })
}

const Navbar = ({ auth }) => {
    return (
        <ul className='nav'>

            {/* only small screen show burger list and logo */}
            <li className='burger-container' onMouseOver={overHandler} onMouseLeave={leaveHandler} >
                <MenuIcon className='menu-icon' />
                
                <ul className='burger-list'>
                    <li><Link to='/' className='link' >Search</Link></li>
                    <li><PostLink /></li>
                    <li><Link to='/about' className='link' >About Us</Link></li>
                    <li><Link to='/contact' className='link' >Contact</Link></li>
                </ul>
            </li>
            
            <img src={logo} className='burger-logo' alt='logo' />


            {/* only bigger screen show left list */}
            <ul className='left'>
                <img src={logo} className='nav-logo' alt='logo' />

                <ul className='left-links'>
                    <li>
                        <Link to='/' className='link' >Search</Link>
                    </li>

                    <li>
                        <PostLink />
                    </li>

                    <li>
                        <Link to='/about' className='link' >About Us</Link>
                    </li>

                    <li>
                        <Link to='/contact' className='link' >Contact</Link>
                    </li>
                </ul>
            </ul>

            { auth.uid ? <AccountLink /> : <LogLinks /> }
            
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Navbar);

