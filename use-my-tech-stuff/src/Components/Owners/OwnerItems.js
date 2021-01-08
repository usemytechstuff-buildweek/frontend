import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

const initialItem = {
    rental_name: "",
    price_per_day: "",
    description: "",
    rented: false,
};

function OwnerItems(props) {
    const { push } = useHistory();
    const { id } = useParams();

    const [item, setItem] = useState(initialItem);

    const goToUpdate = () => {
        push("/tech-protected/update/:id");
    }

    const goToAdd = () => {
        push("/tech-protected/add");
    }

    const handleDelete = (item) => {
        axiosWithAuth.delete(`${BACKEND_LINK}/rentals/${id}`, item)
            .then(res => {
                props.setRentals(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>{props.user.firstName}'s Rental Items</h1>
            {props.userRentals.map(rental => {
                setItem(rental);
                return (<div>
                    <h3>{item.rental_name}</h3>
                    <p>{item.price_per_day} per day</p>
                    <p>{item.description}</p>
                    <p>Rented: {item.rented === true ? "Yes" : "No"}</p>

                    <button onClick={goToUpdate}>Update Listing</button>

                    <button onClick={() => handleDelete(item)}>Delete Listing</button>
                </div>)
            })}
            <button onClick={goToAdd}>Add a Listing</button>
        </div>
    )
}

export default OwnerItems;