import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/small-card.css'

const SmallCardFav = ({ listing }) => {
    return (
        <div className='small-card'>
            <img src={listing.images[0]} alt='img' className='img' />

            <div className='content'>
                <div className='title-container'>
                    <Link to={'/listing/' + listing.id} className='title'>{listing.title}</Link>
                    {/* style this Link tag text to text-overflow: ellipsis does not work, need to target title-container */}
                    {/* or display as inline block, otherwise margin does not work, as inline block text-overflow works as well */}
                    
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

            </div>
        </div>
    )
}

export default SmallCardFav;


