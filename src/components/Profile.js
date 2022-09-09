import React from 'react';
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <Link to='/posts/create-post' className='addAPost'>Add a Post</Link>
        </div>
    )
}

export default Profile;