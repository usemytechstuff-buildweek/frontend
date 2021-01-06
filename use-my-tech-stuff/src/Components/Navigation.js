import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>{
    <div className='navbar'>
    
        <Link className='login' to='/login' >Login</Link>

        <Link className='signup' to='signup' >Sign Up</Link>

    </div>
}

export default NavBar;