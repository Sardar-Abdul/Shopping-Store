import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className = 'nav-links'>
                <Link to = '/' style = {{color: 'orange'}}><li>Home</li></Link>
                <Link to = '/About' style = {{color: 'orange'}}><li>About</li></Link>
                <Link to = '/Shop' style = {{color: 'orange'}}><li>Products</li></Link>
                
            </ul>
        </nav>
    )
}

export default Nav
