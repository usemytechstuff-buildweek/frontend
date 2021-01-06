import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_LINK } from "../constants";


const Renter = () =>{
    const [techToRent, setTechToRent] = useState([])

    const getTech = () =>{
        axios.get(`${BACKEND_LINK}/api/rentals`)
        .then((res) =>{
            setTechToRent(res.data)
        })
        .catch((err) =>{
            console.log(err, 'An error occured retrieving rentals')
        })
    }


    return(
        <div className='techtorent'>
            <h2>Tech avialable for rent!</h2>
            {techToRent.map((tech) =>{
                return <Tech key={tech.id} tech={tech} />
            })}
        </div>
    )
}

