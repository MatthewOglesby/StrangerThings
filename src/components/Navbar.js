import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({ logout, token }) => {
    return (
        <header>
            <nav className='navLinks'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/posts'>Posts</Link>

                {
                    token ? (
                        <Link to='/' onClick={() => { logout(); }}>Logout</Link>
                    ) : (
                            <>
                                <Link to='/register'>Register</Link>
                                <Link to='/login'>Login</Link>
                            </>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar;