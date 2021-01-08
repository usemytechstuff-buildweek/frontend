import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

const UpdateForm = (props) => {
    const { push } = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth
            .get(`${BACKEND_LINK}/rentals/${id}`)
            .then((res) => {
                console.log(res);
                setItem(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const onChange = (event) => {
        event.persist();
        const {name, value, type, checked} = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setItem({
            ...item,
            [name]: newValue,
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth
            .put(`${BACKEND_LINK}/rentals/${id}`, item)
            .then(res => {
                console.log(res);
                props.setItems(res.data);
                push("/tech-protected/user/:id");
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>Update Item</h2>
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

                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;