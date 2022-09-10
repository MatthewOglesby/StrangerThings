import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({ logout, token, fetchPosts }) => {
    return (
        <header>
            <nav className='navLinks'>
                <Link to='/' className='navLinks2'>Home</Link>
                <Link to='/posts' className='navLinks2'>Posts</Link>

                {
                    token ? (
                        <>
                            <Link to='/profile' onClick={() => { fetchPosts(); }} className='navLinks2'>Profile</Link>
                            <Link to='/' onClick={() => { logout(); }} className='navLinks2'>Logout</Link>
                        </>
                    ) : (
                            <>
                                <Link to='/register' className='navLinks2'>Register</Link>
                                <Link to='/login' className='navLinks2'>Login</Link>
                            </>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar;