import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { deletePost, createMessage } from '../api';
import { useParams } from 'react-router-dom';

const SendMessage = ({ postID, token, }) => {
    const [message, setMessage] = useState({ content: '' })

    // three things to make this request 
    // post id, token, message object containing content of message
    async function addMessage() {
        await createMessage({ postID, message, token })
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addMessage();
        }}>
            <input
                type='text'
                placeholder='Enter Message'
                onChange={(event) => setMessage({ content: event.target.value })}
            />
            <button type='submit'>Send Message</button>
        </form>
    )
}

const Posts = ({ posts, token, navigate, getMe }) => { // by putting our posts as our parameter, it destructures our posts and sets it as a prop
    const [activateMessage, setActivateMessage] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { postID } = useParams();

    const postMatches = (post, string) => {
        const { title, description } = post;

        if ((title.includes(string)) || description.includes(string)) {
            return post;
        }
    }

    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));

    const postsToDisplay = searchTerm.length ? filteredPosts : posts;




    return (
        <div className='postBodyWithSearch'>
            <form
                className='searchForm'
                onSubmit={(event) => {
                    event.preventDefault();
                }}>
                <input
                    className='postSearch'
                    type='text'
                    placeholder='Enter Search Here'
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type='submit' className='searchButton'>Search</button>
            </form>
            <div className='postBody'>
                {
                    token ? (
                        <div className='addButtonContainer'>
                            <button className='addButton' onClick={() => navigate('/posts/create-post')} />
                        </div>

                    ) : (
                        <p></p>
                    )
                }
                {
                    postsToDisplay.map((post) => {
                        const { description, location, title, price, _id, isAuthor } = post;
                        return (
                            <div className='postContainer' id='postContainer' key={_id}>
                                <div className='postContainer1'>
                                    <h3>{title}</h3>
                                    <p className='postings'>Description: </p><p>{description}</p>
                                    <p className='postings'>Price: </p><p className='postingInfo'>{price}</p>
                                    <p className='postings'>Location: </p><p className='postingInfo'>{location}</p>

                                    {
                                        isAuthor ? (
                                            <div className='buttonContainer'>
                                                <button className='deletePost'>
                                                    <Link className='maintainLink' to={`/posts/edit-post/${_id}`}>Edit</Link>
                                                </button>
                                                <button className='deletePost' onClick={() => deletePost(token, _id)}>
                                                    Delete
                                                </button>
                                            </div>

                                        ) : (
                                            <div className='buttonContainer'>
                                                <button id='linkToSPV2'>
                                                    <Link to={`/posts/${_id}`} id='linkToSPV'>
                                                        View
                                                    </Link>
                                                </button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}


export default Posts;