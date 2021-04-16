import React from 'react'
import { connect } from 'react-redux'

import MessageCard from './MessageCard'

const MessagesList = ({ chats, listings, auth }) => {
    // here we should use data from chats collection, and sort oder by timestamp of last mssg
    const userId = auth.uid;
    const myChats = chats.filter(chat => chat.client === userId || chat.postedBy === userId);

    // order chats from new to old according to timestamp
    const orderedChats = myChats.sort(function(a,b){
        return b.updated.toDate() - a.updated.toDate()
    })
    
    const orderedListings = () => {
        const items = [];
        orderedChats.map(chat => {
            const item = listings.filter(listing => listing.id === chat.property);
            return items.push(item[0]);
        })
        return items;
    }

    const newListings = orderedListings();

    return (
        <div>
            { newListings.length === 0 && 
                <div className='wrapper messages-list'>
                    <h3>Your Messages</h3>
                    <div> Oops! Your list is empty. </div>
                </div> 
            }

            { newListings && newListings.map(listing => {
                const mssg = orderedChats.filter(chat => chat.property === listing.id);

                return (
                    <MessageCard listing={listing} key={listing.id} mssg={mssg}/>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        chats: state.firestore.ordered.chats,
        listings: state.firestore.ordered.listings,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(MessagesList);


