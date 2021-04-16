import React from 'react'

import '../../css/button.css'

const MyButton = ({ label, onClick }) => {
    return (
        <button type='submit' id='my-button' onClick={onClick} >{ label }</button>
    )
}

export default MyButton;

