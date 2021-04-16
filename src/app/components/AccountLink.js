import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { connect } from 'react-redux'
import { logout } from '../actions/authActions'

const overHandler = () => {
    const account = document.querySelector('.nav .account');
    const list = document.querySelector('.nav .account .list');
    const arrow = document.querySelector('.nav .account .icon .arrow');

    account.addEventListener('mouseover', () => {
        list.classList.add('open');
        arrow.classList.add('open');
    });
}

const leaveHandler = () => {
    const account = document.querySelector('.nav .account');
    const list = document.querySelector('.nav .account .list');
    const arrow = document.querySelector('.nav .account .icon .arrow');

    account.addEventListener('mouseleave', () => {
        list.classList.remove('open');
        arrow.classList.remove('open');
    });
}

const AccountLink = ({ logout }) => {
    return (
        <ul className='account' onMouseOver={overHandler} onMouseLeave={leaveHandler}>
            <li className='icon'>
                <PersonIcon style={{ fontSize: 35, color: '#fff' }} className='person' />
                <KeyboardArrowDownIcon style={{ fontSize: 30, color: '#fff' }} className='arrow' />
            </li>

            <ul className='list' >
                <li>
                    <Link to='/profile' className='link'>Profile</Link>
                </li>
                <li>
                    <Link to='/favourite' className='link'>My Favourite</Link>
                </li>
                <li>
                    <Link to='/messageslist' className='link'>Messages</Link>
                </li>
                <li>
                    <Link to='/posted' className='link'>Posted Home</Link>
                </li>
                <li>
                    <Link to='/' onClick={logout} className='link'>Log Out</Link>
                </li>
            </ul>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(AccountLink);

