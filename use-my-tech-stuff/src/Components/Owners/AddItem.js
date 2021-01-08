import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

const AddItem = (props) => {
    const { push } = useHistory();
    const { id } = useParams();

    const [item, setItem] = useState(initialItem);

    const onChange = (event) => {
        event.persist();
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setItem({
            ...item,
            [name]: newValue,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth
            .post(`${BACKEND_LINK}/users/${id}/rentals`, item)
            .then(res => {
                console.log(res);
                props.setUserRentals([...props.userRentals, res.data]);
                push("/tech-protected/user/:id");
            })
            .catch(err => console.log(err));

            axiosWithAuth
            .post(`${BACKEND_LINK}/rentals`, item)
            .then(res => {
                console.log(res);
                props.setRentals([...props.rentals, res.data]);
                push("/tech-protected/user/:id");
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="rental_name"
                    onChange={onChange}
                    placeholder="Rental item name"
                    value={item.rental_name}
                />

                <input
                    type="number"
                    name="price_per_day"
                    onChange={onChange}
                    placeholder="Price per day"
                    value={item.price_per_day}
                />

                <input
                    type="string"
                    name="description"
                    onChange={onChange}
                    placeholder="Description"
                    value={item.description}
                />

                <input
                    type="checkbox"
                    name="rented"
                    onChange={onChange}
                    placeholder="Rented?"
                    value={item.rented}
                />

                <button>Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;