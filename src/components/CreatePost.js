import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createPost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const [willDeliver, setWillDeliver] = useState(false)

    const newPost = {
        title,
        description,
        price,
        location,
        willDeliver
    }

    async function addPost() {
        const result = await createPost(token, newPost)
        fetchPosts();
        navigate('/posts')
    }

    return (
        // this needs to be a form that accepts the five requests parameters
        <form className='createNewPost'>
            <label className='createPostLabel1'>Title</label>
            <input
                className='postings1'
                type='text'
                onChange={(event) => setTitle(event.target.value)} />
            <label className='createPostLabel1'>Description</label>
            <input
                className='postings1'
                type='text'
                onChange={(event) => setDescription(event.target.value)} />
            <label className='createPostLabel1'>Price</label>
            <input
                className='postings1'
                type='text'
                onChange={(event) => setPrice(event.target.value)} />
            <label className='createPostLabel1'>Location</label>
            <input
                className='postings1'
                type='text'
                onChange={(event) => setLocation(event.target.value)} />
            <label className='createPostLabel1'>Delivery</label>
            <input
                className='postings1'
                type='checkbox'
                id='Yes'
                onChange={(event) => setWillDeliver(event.target.checked)} />
            <div className='buttonContainer'>
                <button className='deletePost' onClick={(event) => { addPost(); event.preventDefault() }}>Create Post</button>
            </div>
        </form>
    )
}

export default CreatePost;