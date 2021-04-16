import React, { useRef, useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment'

import { connect } from 'react-redux'
import { sendMessage } from '../../actions/listingActions'

import useMessage from '../../hooks/useMessage'
import '../../css/message.css'

const Message = ({ auth, location, sendMessage, match }) => {
    const userId = auth.uid;
    const chatId = location.mssgProps.chatId;
    //const id = match.params.id;

    const [formValue, setFormValue] = useState('');
    const myRef = useRef();

    const handleChange = (e) => {
        setFormValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(formValue, chatId);
        
        setFormValue('');
        myRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const chat = (mssg) => {
        const mssgClass = mssg.from === userId ? 'sent' : 'received';
    
        return (
            <div key={mssg.id} className={`chat ${mssgClass}`}>
                <p>
                    { mssg.content } <br/>
                    <div className='time'>{ moment(mssg.createdAt.toDate()).format('lll') }</div>
                </p>
            </div>
        )
    }
    
    //In example of Message Component:
    //01. Back-end we pass data from user to database, it normally happens in Actions, so new data will
    //be saved in back-end, but UI will not be update automatically, therefore we need step 02
    
    //02. Front-end we use hooks in corresponding UI component and set real time listener in hooks.
    //any data changes will invoke hooks and update local state/data, so UI will be updated

    //step 02: real time listener to update the message in UI page
    //custom hooks is better option to monitor and get data changes
    const myChat = useMessage('chats', chatId);

    //the data from react-redux-firebase state is NOT real time updated
    //it will be updated only when component re-render

    return (
        <div className='wrapper message'>
            <div>
                { myChat && myChat[0].messages.map(mssg => chat(mssg)) }
                <span ref={myRef} />
            </div>

            <form onSubmit={handleSubmit}>
                <input 
                    value={formValue}
                    placeholder='your message here'
                    onChange={handleChange}
                />

                <button type='submit' disabled={!formValue}>
                    <SendIcon className='send'/>
                </button>
            </form>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (value, chatId) => dispatch(sendMessage(value, chatId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);



