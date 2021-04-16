import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux'

import firebase from '../../../fbConfig'
import { addFavourite, removeFavourite } from '../../actions/listingActions'
import '../../css/card.css'

const Card = ({ listing, addFav, removeFav, auth }) => {
    const [userFav, setUserFav] = useState([]);
    const userId = auth.uid;

    const docRef = firebase.firestore().collection('users').doc(userId);
    docRef.get().then(doc => setUserFav([...doc.data().favourite]));

    return (
        <div className='wrapper card'>
            <img src={listing.images[0]} alt='img' className='img' />
            
            <div className='summary'>
                <div className='title-container'>
                    <Link to={'/listing/' + listing.id} className='title'>{listing.title}</Link>

                    { userFav.includes(listing.id) === true ? 
                        <FavoriteIcon 
                            style={{fontSize: 30}} 
                            className='title-heart'
                            onClick={() => removeFav(listing.id)}
                        /> :
                        <FavoriteBorderIcon 
                            style={{fontSize: 30}} 
                            className='title-heart-outline'
                            onClick={() => addFav(listing.id)}
                        />  
                    }
                </div>
                
                <div className='details'>
                    <p>
                        <LocationOnOutlinedIcon style={{fontSize: 16}} className='title-icon'/>
                        {listing.address}
                    </p>
                    <span>{listing.price} €</span>
                    <span>{listing.size} m²</span>
                    <span>{listing.rooms} rooms</span>
                </div>

                <div className='contact-info'>
                    <p>{`${listing.gender} ${listing.firstName} ${listing.lastName}`}</p>
                    <p>{listing.company}</p>
                </div>
            </div>
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
        addFav: (id) => dispatch(addFavourite(id)),
        removeFav: (id) => dispatch(removeFavourite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);




