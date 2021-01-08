import React from 'react';
import Owner from './Owners/OwnerItems';
import Listings from './LandingPage/Listings';



const TechForRent = (props) =>{


    return(
        <div>
        (userType === 'owner' ? <Owner/> : <Listings />)
        </div>
    )
}

export default TechForRent;