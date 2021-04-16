import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import '../../css/favourite.css'
import SmallCardFav from '../listings/SmallCardFav'

const Favourite = ({ auth, users, listings }) => {
    const id = auth.uid;
    const user = users[id];
    const favIds = user.favourite;

    const favListings = [];

    favIds.map(id => favListings.push({
        ...listings[id],
        id: id
    }))

    if(!auth.uid) return <Redirect to='/' />

    return (
        <div className='wrapper favourite'>
            <h3>Favourite</h3>

            <div className='list'>
                { favListings && favListings.map(listing => (
                    <SmallCardFav listing={listing} key={listing.id}/>
                )) }

                { favListings.length === 0 && <div>Oops! Your list is empty.</div> }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.data.users,
        listings: state.firestore.data.listings
    }
}

export default connect(mapStateToProps)(Favourite);

