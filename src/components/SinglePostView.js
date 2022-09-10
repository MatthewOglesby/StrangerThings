import { create } from '@mui/material/styles/createTransitions';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api';

const SendMessage = ({ postID, token }) => {
    const [message, setMessage] = useState({content: ''})

// three things to make this request 
    // post id, token, message object containing content of message
async function addMessage() {
    await createMessage({postID, message, token})
}

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addMessage();
        }}>
            <input 
            type='text'
            placeholder='Enter Message'
            onChange={(event) => setMessage({content: event.target.value})}
            />
            <button type='submit'>Send Message</button>
        </form>
    )
}

const SinglePostView = ({ posts, token, getMe }) => {
    const [activateMessage, setActivateMessage] = useState(false);

    const { postID } = useParams();

    
    
if (posts.length) {
        const [currentPost] = posts.filter(post => post._id === postID);
        const { title, description, location, price, willDeliver } = currentPost;

        return (
            <div className='singlePostView' >
                <div className='postContainer1'>
                    <h3 className='SPVTitle'>{title}</h3>
                    <p className='SPVContent'>Description: </p><p className='postingInfo1'>{description}</p>
                    <p className='SPVContent'>Price: </p><p className='postingInfo1'>{price}</p>
                    <p className='SPVContent'>Location: </p><p className='postingInfo1'>{location}</p>
                    <div className='buttonContainer'>
                        <button id='contactSeller' onClick={() => setActivateMessage(!activateMessage)}>Contact Seller</button>
                        {
                            activateMessage && <SendMessage postID={postID} token={token} getMe={getMe}/>
                        }
                    </div>
                </div>
            </div>
        )

} else {
    return (
        <h1>Waiting for post...</h1>
    )
}

}

export default SinglePostView;