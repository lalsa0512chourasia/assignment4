import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () =>{
    return(
        <div className=''>
            <ul>
           <NavLink to='/'><li>Home</li></NavLink>
           <NavLink to='/student'><li>Student</li></NavLink>
           <NavLink to='/contact'><li>Contact</li></NavLink>
           </ul>
        </div>
    )
}