import React from 'react';
import { useParams } from "react-router-dom";
import OwnerItems from './Owners/OwnerItems';
import Listings from './LandingPage/Listings';

const TechForRent = (props) => {
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}`)
            .then(res => props.setUser(res.data))
            .catch(err => console.log(err));

        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}/rentals`)
            .then(res => props.setUserRentals(res.data))
            .catch(err => console.log(err));

        axiosWithAuth.get(`${BACKEND_LINK}/rentals/`)
            .then(res => props.setRentals(res.data))
            .catch(err => console.log(err));
    }, []);



    return (
        <div>
            {props.user.userType === 'owner' && <OwnerItems
                user={props.user}
                userRentals={props.userRentals}
            />}
            <Listings rentals={props.rentals} />
        </div>
    )
}

export default TechForRent;