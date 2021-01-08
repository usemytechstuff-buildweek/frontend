import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

const initialItem = {
    rental_name: "",
    price_per_day: "",
    description: "",
    rented: false,
};

function OwnerItems(props) {
    const { id } = useParams();
    const { push } = useHistory();

    const [item, setItem] = useState(initialItem);

    useEffect(() => {
        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}`) //not correct but will have to do for now, ask Livy about how to get id!
            .then(res => props.setUser(res.data))
            .catch(err => console.log(err));

        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}/rentals`)
            .then(res => props.setRentals(res.data))
            .catch(err => console.log(err)); //see above comment
    }, []);

    const goToUpdate = () => {
        push("/tech-protected/update");
    }

    const goToAdd = () => {
        push("/tech-protected/add");
    }

    return (
        <div>
            <h1>{props.user.firstName}'s Rental Items</h1>
            {props.rentals.map(rental => {
                setItem(rental);
                return (<div>
                    <h3>{item.rental_name}</h3>
                    <p>{item.price_per_day} per day</p>
                    <p>{item.description}</p>
                    <p>Rented: {item.rented === true ? "Yes" : "No"}</p>
                    <button onClick={goToUpdate}>Update Listing</button>
                </div>)
            })}
            <button onClick={goToAdd}>Add a Listing</button>
        </div>
    )
}

export default OwnerItems;