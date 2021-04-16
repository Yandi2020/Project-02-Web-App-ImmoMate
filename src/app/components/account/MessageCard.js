import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'

import '../../css/message-card.css'

const MessageCard = ({ listing, mssg, auth, users }) => {
    const chat = mssg[0];
    const userId = auth.uid;
    
    const getName = () => {
        if(userId === chat.postedBy){
            const client = users[chat.client];
            const name = `${client.firstName} ${client.lastName}`;
            return name;
        }else{
            const name = `${listing.firstName} ${listing.lastName}`;
            return name;
        }
    }

    const lastMssg = chat.messages[chat.messages.length - 1];

    return (
        <div className='wrapper message-card'>
            <img src={listing.images[0]} alt='img'/>

            <Link to={{
                pathname: '/message/' + listing.id,
                mssgProps: {
                    chatId: chat.id
                }
            }} >
                <div className='container'>
                    <p className='title'>{listing.title}</p>

                    <p className='name'>{ getName() }</p>
                    
                    <p className='content'>{ lastMssg.content }</p>
                </div>
            </Link>

            <div className='time'>{ moment(lastMssg.createdAt.toDate()).format('LLL') }</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.data.users
    }
}

export default connect(mapStateToProps)(MessageCard);

