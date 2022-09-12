import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import { getPosts, getUserDetails } from './api';
import './style.css'

import {
    Navbar,
    Posts,
    Profile,
    Home,
    Register,
    Login,
    CreatePost,
    SinglePostView,
    EditPost
} from './components'


const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    console.log(user)
    // can log the token of login or user if interested in seeing it

    function logout() {
        window.localStorage.removeItem('token');
        setToken('')
        setUser({});
    }

    async function fetchPosts() {
        const results = await getPosts(token)
        setPosts(results.data.posts);
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token')
        if (!token) {
            if (storedToken) {
                setToken(storedToken);
            }
            return;
        }
        const results = await getUserDetails(token)
        if (results.success) {
            setUser(results.data);
        } else {
            console.log(results.error.message)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [token])

    useEffect(() => {
        getMe();
    }, [token])

    return (
        <div className='navbarLinks'>
            <Navbar logout={logout} token={token} fetchPosts={fetchPosts}/>
            <Routes>
                <Route
                    path='/'
                    element={<Home navigate={navigate} token={token} logout={logout}/>}
                />
                <Route
                    path='/posts'
                    element={<Posts posts={posts} token={token} navigate={navigate}/>}
                />
                <Route
                    path='/posts/:postID'
                    element={<SinglePostView posts={posts} token={token} getMe={getMe} navigate={navigate}/>}
                />
                <Route
                    path='/profile'
                    element={<Profile user={user} posts={posts} token={token} fetchPosts={fetchPosts}/>}
                />
                <Route
                    path='/posts/create-post'
                    element={<CreatePost token={token} fetchPosts={fetchPosts} navigate={navigate} />}
                />
                <Route
                    exact path='/posts/edit-post/:postID'
                    element={<EditPost
                        posts={posts}
                        token={token}
                        navigate={navigate}
                        fetchPosts={fetchPosts}
                    />}
                />
                <Route
                    path='/register'
                    element={<Register setToken={setToken} token={token} navigate={navigate} />}
                />
                <Route
                    path='/login'
                    element={<Login
                        setToken={setToken}
                        navigate={navigate}
                    />}
                />
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


/*

Login
(LocalStorage)
    - setItem
        - sets kkey/value pair items
        - window.localStorage.setItem('token', <token>)
    - getItem
        - gets value based on item name
        - window.localStorage.getItem('token')
    - removeitem
        - removes key/value pair in localStorage
        - window.localStorage.removeItem('token')
Registration
Posts
Profile
Navbar
AddPost

*/