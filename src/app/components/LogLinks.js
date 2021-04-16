import React from 'react'
import { Link } from 'react-router-dom'

const LogLinks = () => {
    return(
        <ul className='log'>
            <li><Link to='/login' className='link'>Login</Link></li>
            <li><Link to='/register' className='link'>Register</Link></li>
        </ul>
    )
}

export default LogLinks;

