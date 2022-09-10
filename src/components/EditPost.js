import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { updatePost } from '../api';

const EditPost = ({ posts, token, fetchPosts, navigate }) => {
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);
  
  async function editPost() {
    const updatedPost = {
      token: token,
      title: newTitle,
      description: newDescription,
      location: newLocation,
      price: newPrice,
      willDeliver: newWillDeliver,
      _id: postID
    }
    await updatePost(updatedPost)
    fetchPosts();
    navigate('/profile')
  }
  

    return (
        <form
            className='editPost'
                onSubmit={(event) => {
                event.preventDefault();
                editPost();
            }}
            >
            <label className='createPostLabel'>Title</label>
            <input
                className='postings1'
                type='text'
                placeholder={title}
                onChange={(event) => setNewTitle(event.target.value)}
            />
            <label className='createPostLabel'>Description</label>
            <input
                className='postings1'
                type='text'
                placeholder={description}
                onChange={(event) => setNewDescription(event.target.value)}
            />
            <label className='createPostLabel'>Price</label>
                <input
                    className='postings1'
                    type='text'
                    placeholder={price}
                    onChange={(event) => setNewPrice(event.target.value)}
                />
                <label className='createPostLabel'>Location</label>
            <input
                className='postings1'
                type='text'
                placeholder={location}
                onChange={(event) => setNewLocation(event.target.value)}
            />
            <label className='createPostLabel'>Delivery</label>
            <input
                className='postings1'
                type='checkbox'
                placeholder='true'
                onChange={(event) => setNewWillDeliver(event.target.checked)}
            />
            <button 
            className='submit'
            type='submit'>
                Submit Changes
            </button>
        </form>
    )
}

export default EditPost;