import React from 'react';
import { Link } from 'react-router-dom';

const Listings = (props) =>{
    const { items } = props;

    return(
        <div className='listings-wrapper'>
            {items.map((item) =>{
                <div className='item-wrapper' key={item.id}>
                    <Link {/*link to item page*/}>
                    <img src={} alt={}/>
                    <p>{item.name}</p>
                    <p>{item.priceOfRent}</p>
                    </Link>
                </div>

            })}
        </div>
    )

}

export default Listings;