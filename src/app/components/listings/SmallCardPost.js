import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { deleteListing } from '../../actions/listingActions'

import '../../css/small-card.css'
import MyButton from '../form/MyButton'

const SmallCardPost = ({ listing, deleteListing }) => {
    return (
        <div className='small-card'>
            <img src={listing.images[0]} alt='img' className='img' />

            <div className='content'>
                <div className='title-container'>
                    <Link to={'/listing/' + listing.id} className='title'>{listing.title}</Link>
                    
                    <p>{ listing.address }</p>
                </div>

                <div className='detail'>
                    <div>
                        <span>Rent Price:</span>
                        <span>{listing.price} €</span>
                    </div>
                    <div>
                        <span>Rooms:</span>
                        <span>{listing.rooms}</span>
                    </div>
                    <div>
                        <span>Size:</span>
                        <span>{listing.size} m²</span>
                    </div>
                </div>

                <p className='company'>{listing.company}</p>

                <MyButton 
                    label='Delete Post' 
                    onClick={() => {
                        if (window.confirm('Are you sure delete this from post list?')){
                            deleteListing(listing.id)
                        }
                    }} 
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listingError: state.listing.listingError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteListing: (id) => dispatch(deleteListing(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SmallCardPost);

