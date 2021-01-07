import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

const initialItem = {
    rental_name: "",
    price_per_day: "",
    description: "",
    rented: false,
};

const UpdateForm = (props) => {
    const { push } = useHistory();
    const [item, setItem] = useState(initialItem);
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

    const changeHandler = (event) => {
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
                push("/tech-protected");
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
                    onChange={changeHandler}
                    placeholder="Rental item name"
                    value={item.rental_name}
                />

                <input
                    type="number"
                    name="price_per_day"
                    onChange={changeHandler}
                    placeholder="Price per day"
                    value={item.price_per_day}
                />

                <input
                    type="string"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Description"
                    value={item.description}
                />

                <input
                    type="checkbox"
                    name="rented"
                    onChange={changeHandler}
                    placeholder="Rented?"
                    value={item.rented}
                />

                <button className="md-button form-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;