import React from 'react'
import { connect } from 'react-redux'
import useSelectedFirestore from '../../hooks/useSelectedFirestore'
import { Redirect } from 'react-router-dom'

import '../../css/favourite.css'
import SmallCardPost from '../listings/SmallCardPost'

const Posted = ({ auth }) => {
    const id = auth.uid;
    const { docs } = useSelectedFirestore('listings', 'postedBy', '==', id);
    
    if(!id) return <Redirect to='/' />

    return (
        <div className='wrapper posted'>
            <h3>Your Posts</h3>
        
            <div className='list'>
                { docs && docs.map(listing => (
                    <SmallCardPost listing={listing} key={listing.id}/>
                )) }

                { docs.length === 0 && <div>Oops! Your list is empty.</div> }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Posted);






