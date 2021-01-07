import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

const initialItem = {
    rental_name: "",
    price_per_day: "",
    description: "",
    rented: false,
};

const initialUser = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
}

function OwnerItems() {
    const { url } = useRouteMatch();
    const { id } = useParams();
    const { push } = useHistory();

    const [user, setUser] = useState(initialUser);
    const [userRentals, setUserRentals] = useState([]);
    const [item, setItem] = useState(initialItem);

    useEffect(() => {
        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}`) //not correct but will have to do for now, ask Livy about how to get id!
            .then(res => setUser(res.data))
            .catch(err => console.log(err));

        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}/rentals`)
            .then(res => setUserRentals(res.data))
            .catch(err => console.log(err)); //see above comment
    }, []);

    const goToUpdate = () => {
        push("/tech-protected/:id/update");
    }

    const goToAdd = () => {
        push("/tech-protected/add");
    }

    return (
        <div>
            <h1>{user.firstName}'s Rental Items</h1>
            {userRentals.map(rental => {
                setItem(rental);
                return (<div>
                    <h3>{rental.rental_name}</h3>
                    <p>{rental.price_per_day} per day</p>
                    <p>{rental.description}</p>
                    <p>Rented: {rental.rented === true ? "Yes" : "No"}</p>
                    <button onClick={goToUpdate}>Update Listing</button>
                </div>)
            })}
            <button onClick={goToAdd}>Add a Listing</button>
        </div>
    )
}