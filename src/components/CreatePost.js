import React from 'react';
import { createPost } from '../api';

const CreatePost = ({ token }) => {
    let newTitle = document.getElementById('newTitle')
    let newDescription = document.getElementById('newDescription')
    let newPrice = document.getElementById('newTitle')
    let newLocation = document.getElementById('newTitle')
    let newDeliver = document.getElementById('newTitle')

    const newPost = {
        title: newTitle,
        description: newDescription,
        price: newPrice,
        location: newLocation,
        willDeliver: newDeliver
    }

    async function addPost() {
        const result = await createPost(token, newPost)
        console.log(result)
    }

    return (
        // this needs to be a form that accepts the five requests parameters
        <form className='createNewPost'>
            <label>Title</label>
            <input id='newTitle'></input>
            <label>Description</label>
            <input id='newDescription'></input>
            <label>Price</label>
            <input id='newPrice'></input>
            <label>Location</label>
            <input id='newLocation'></input>
            <label>Delivery</label>
            <select id="newDeliver">
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <button onClick={() => addPost()}>Create a New Post</button>
        </form>
    )
}

export default CreatePost;