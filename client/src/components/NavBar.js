import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

    const navBarStyle = {
        color: 'white'
    };

    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navBarStyle} to='/'>
                <li>Home</li>
                </Link>
                <Link style={navBarStyle} to='/new-advert'>
                <li>Place a new ad</li>
                </Link>
                <li>Edit ad</li>
                <Link style={navBarStyle} to='/adverts'>
                <li>View ads</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;