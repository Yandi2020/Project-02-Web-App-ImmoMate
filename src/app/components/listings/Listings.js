import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

import Card from './Card'
import Search from './Search'

const Listings = ({ listings }) => {
    const [searched, setSearched] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = (values) => {
        const searchList = listings.filter(listing => 
            Number(values.minRent) <= Number(listing.price) && Number(listing.price) <= Number(values.maxRent) &&
            Number(values.minSize) <= Number(listing.size) && Number(listing.size) <= Number(values.maxSize) &&
            Number(values.minRooms) <= Number(listing.rooms) && 
            listing.address.toLowerCase().includes(values.location.toLowerCase()) 
        )
        
        if(searchList.length > 0){
            setSearched(searchList)
            setError('')
        }else{
            setError('OOPS! No result has found.')
        }
    }
    
    return (
        <div>
            <Search handleSearch={handleSearch} error={error} />

            {searched.length === 0 && listings && listings.map(listing => {
                return (
                    <div key={listing.id}>
                        <Card listing={listing} />
                    </div>
                )
            })}
        
            {searched.length > 0 && searched.map(listing => {
                return (
                    <div key={listing.id}>
                        <Card listing={listing} />
                    </div>
                )
            })}
        </div> 
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.firestore.ordered.listings
    }
}

export default compose(
    connect(mapStateToProps),

    //when component renders, connect firestore different collections with redux store 
    firestoreConnect([
        { collection: 'listings', orderBy: ['createdAt', 'desc'] },   
        { collection: 'users' },
        { collection: 'chats' },
    ])
)(Listings);

//NOTES:

//state.firebase.auth.uid
//state.firebase.auth.apiKey
//state.firebase.auth.email
//state.firebase.auth.lastLoginAt
//state.firebase.profile.createdAt
//state.firebase.profile.createdAt / gender / firstName / lastName / email
//state.firebase.data
//state.firebase.errors
//state.firebase.ordered

//state.firestore.data.listings / chats / users 
//state.firestore.errors
//state.firestore.listeners
//state.firestore.ordered





