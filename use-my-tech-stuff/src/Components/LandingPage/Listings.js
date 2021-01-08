import React from 'react';
import { Link } from 'react-router-dom';

const Listings = (props) =>{

    return(
        <div className='listings-wrapper'>
            {props.rentals.map((rental) =>{
                <div className='item-wrapper' key={rental.id}>
                    <Link to="/tech-protected/rentals/:id">
                    <h3>{rental.rental_name}</h3>
                    <p>{rental.price_per_day}</p>
                    <p>{rental.description}</p>
                    <p>Rented: {rental.rented === true ? "Yes" : "No"}</p>
                    </Link>
                </div>

            })}
        </div>
    )

}

export default Listings;