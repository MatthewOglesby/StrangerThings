import React from 'react';
import { navigate } from 'react-router-dom';

const Home = ({ navigate, token, logout }) => {
    return (
        <>
            <h1 className='homeHeader'>Welcome to Stranger's Things</h1>
            <div className='home'>
                <div className='homePostsButtonCon'>
                    <div className='postsButtonContainer'>
                        <button className='postsButton' onClick={() => navigate('/posts')}>Posts</button>
                    </div>
                </div>
                {
                    token ? (
                        <>
                            <div className='homePostsButtonCon'>
                                <div className='profileButtonContainer'>
                                    <button className='profileButton' onClick={() => navigate('/profile')}>Profile</button>
                                </div>
                            </div>
                            <div className='homePostsButtonCon'>
                                <div className='homeAddButtonContainer'>
                                    <button className='homeAddButton' onClick={() => navigate('/posts/create-post')} />
                                </div>
                            </div>
                            <div className='homePostsButtonCon'>
                                <div className='homeLogoutButtonContainer'>
                                    <button className='homeLogoutButton' onClick={() => { logout(); }}>Logout</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='homePostsButtonCon'>
                                <div className='profileButtonContainer'>
                                    <button className='profileButton' onClick={() => navigate('/login')}>Login</button>
                                </div>
                            </div>
                            <div className='homePostsButtonCon'>
                                <div className='registerButtonContainer'>
                                    <button className='registerButton' onClick={() => navigate('/register')}>Register</button>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Home;