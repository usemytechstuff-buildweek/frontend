import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { BACKEND_LINK } from "../../constants";

function OwnerItems(props) {
    const { url } = useRouteMatch();
    const { id } = useParams();
    const { push } = useHistory();

    const [user, setUser] = useState({});
    const [userRentals, setUserRentals] = useState([]);

    useEffect(() => {
        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}`) //not correct but will have to do for now, ask Livy about how to get id!
            .then(res => setUser(res.data))
            .catch(err => console.log(err));

        axiosWithAuth.get(`${BACKEND_LINK}/users/${id}/rentals`)
            .then(res => setUserRentals(res.data))
            .catch(err => console.log(err)); //see above comment
    }, []);

    return (
        <div>
            {props.}
        </div>
    )
}