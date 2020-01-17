import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link>
                <li>Place a new ad</li>
                </Link>
                <Link>
                <li>Edit ad</li>
                </Link>
                <Link to='/adverts'>
                <li>View ads</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;