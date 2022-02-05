import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
            <NavLink to="/" class="nav-link active" aria-current="page">Home</NavLink>
            <NavLink to="/about" class="nav-link" >About</NavLink>
            <NavLink to="/contact" class="nav-link" >Contact</NavLink>

        
        </div></nav>
        
);
}
export default Navigation;