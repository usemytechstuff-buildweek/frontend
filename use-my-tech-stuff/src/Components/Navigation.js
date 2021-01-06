import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    <div className='navbar'>
    
        <Link className='login' to='/login' >Login</Link>

        <Link className='signup' to='/signup' >Sign Up</Link>

        <Link className='techforrent' to='/tech' >View Tech</Link>

    </div>
}

export default NavBar;