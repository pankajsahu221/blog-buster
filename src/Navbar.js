import React from 'react'
import './Navbar.css'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar__cont">
          <div className="navbar">
            
            <Link to="/" style={{textDecoration: "none", color:"white"}}>
              <AcUnitIcon className="nav__logo"/>
            </Link>

            <Link to="/" style={{textDecoration: "none", color:"white"}}>
              <p className="nav__title">Blog Buster</p>
            </Link>

             <AccountCircleIcon />
          
          </div>
        </div>
    )
}

export default Navbar
