import React, { useState } from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Geocode from "react-geocode";
import GoogleMapReact from 'google-map-react';

import { connect } from 'react-redux'
import { newMessage } from '../../actions/listingActions'

import '../../css/listing-details.css'
import man from '../../../assets/avatar-man.png'
import woman from '../../../assets/avatar-woman.png'

const ListingDetails = ({ match, auth, listings, chats, newMessage }) => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');

    const id = match.params.id; 
    const userId = auth.uid;
    const listing = listings[id];
    const owner = listing.postedBy;

    const getChat = () => {
        if(userId){
            return chats.filter(chat => chat.property === id && chat.client === userId);
        }else {
            return null
        }
    }

    //not showing for security reason
    const api = ''
    Geocode.setApiKey(api);
    Geocode.fromAddress(listing.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLatitude(lat);
          setLongitude(lng);
        },
        (error) => {
          console.error(error);
        }
    );

    const MapMarker = ({ text }) => {
        return (
            <div>
                <LocationOnIcon className='homemarker' />
                <span className='text'>{text}</span>
            </div>
        )   
    }

    //we should put click event inside arrow function, so dom renders firstly then we call it
    //if put click event directly outside, it will not work because dom not rendered yet
    const contactClick = () => {
        const contact = document.querySelector('.listing-details .contact-container .contact');
        const arrow = document.querySelector('.listing-details .contact-container .show .contact-arrow');
        contact.classList.toggle('open');
        arrow.classList.toggle('open');
    }

    const messageClick = () => {
        const button = document.querySelector('.listing-details .contact-container .contact .mssg-btn');
        const popup = document.querySelector('.listing-details .contact-container .contact .popup-wrapper');

        button.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        popup.addEventListener('click', (e) => {
            if(e.target.className === 'popup-wrapper'){
                popup.style.display = 'none';
            }
        });
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newMessage(message, userId, id, owner);

        setMessage('');
        document.getElementById('disable-btn').disabled=true;
        document.getElementById('disable-form').style.display = 'none';
        setNotification('Message has been sent successfully');
    }

    return (
        <div className='wrapper listing-details'>
            <div className='container'>
                <Carousel arrows infinite>
                    { listing.images.map(img => <img src={img} key={img} className='image' alt='img' />) }
                </Carousel>
            </div>

            <div className='detail-container'>
                <h3>{listing.title}</h3>
                <p className='address'>
                    <LocationOnOutlinedIcon style={{fontSize: 16}} className='icon'/>
                    {listing.address}
                </p>

                <div className='details'>
                    <div className='detail'>
                        <div>{listing.price} €</div>
                        <p>Monthly Rent</p>
                    </div>
                    <div className='detail'>
                        <div>{listing.rooms}</div>
                        <p>Rooms</p>
                    </div>
                    <div className='detail'>
                        <div>{listing.size} m²</div>
                        <p>Size</p>
                    </div>
                    <div className='detail'>
                        <div>{listing.type}</div>
                        <p>Property Type</p>
                    </div>
                </div>
            </div>

            <div className='contact-container'>
                <p className='company'>{listing.company}</p>

                <div>
                    { listing.gender === 'Mr.' ? <img src={man} alt='img' /> : <img src={woman} alt='img' /> }
                    <p>{`${listing.gender} ${listing.firstName} ${listing.lastName}`}</p>
                </div>

                <div className='show'>
                    <button onClick={contactClick} className='show-btn'>Show Contact</button>
                    <KeyboardArrowDownIcon style={{ fontSize: 25 }} className='contact-arrow'/>
                </div>
                
                <ul className='contact'>
                    <ul>
                        <li>Tel: {listing.phone}</li>
                        <li>Email: {listing.email}</li>
                    </ul>
                    
                    <div className='mssg-btn' onClick={messageClick}>New Message</div>
                    
                    <div className='popup-wrapper' onClick={messageClick}>
                        <div className='popup'>
                            { getChat() == null && <div className='login-hint'>Please login or register your account.</div> }

                            { userId && getChat().length > 0 && <div className='mssg-existed'>The message about this property has already been created. Please check your messages list. </div> }

                            { userId && getChat().length === 0 &&
                                <form className='popup-content' onSubmit={handleSubmit} id='disable-form'>
                                    <textarea cols='42' rows='8' onChange={handleChange} value={message} placeholder='Your Message...' required/>
                                    <button type='submit' id='disable-btn'>Send Request</button>
                                </form> 
                            }

                            { notification && <div className='notification'>{ notification }</div> } 
                        </div>
                    </div>
                </ul>
            </div>

            <div className='description'>
                <h4>Property Description: </h4>
                <p>{listing.description}</p>
            </div>
            
            <div className='map-container'>
                <h4>Map: </h4>
                <p>{listing.address}</p>

                <div className='map'>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: api }}
                        center={{ lat: latitude, lng: longitude }}
                        defaultZoom={15}
                    >
                        <MapMarker
                            lat={latitude}
                            lng={longitude}
                            text='Home'
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.firestore.data.listings,
        chats: state.firestore.ordered.chats,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newMessage: (message, userId, id, owner) => dispatch(newMessage(message, userId, id, owner))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingDetails);


//get data of listing, Method 2 - hooks: 

//import { useFirestoreConnect } from 'react-redux-firebase'
//import { useSelector } from 'react-redux'

// const id = props.match.params.id; 

// useFirestoreConnect(() => [
//     { collection: 'listings', doc: id } 
// ]);

// const listing = useSelector(
//     ({ firestore: { data } }) => data.listings && data.listings[id]
// );


