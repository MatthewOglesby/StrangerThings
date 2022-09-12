import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';

const Profile = ({ user, token }) => {
    const { username } = user;
    const messages = user.messages;
    const userID = user._id
    const posts = user.posts

    if (posts) {
        return (
            <div className='profileContainer'>
                <h1>Welcome, {username}!</h1>
                <div className='profilePosts'>
                </div>
                <div className='postBody1'>
                    <div className='postBody2'>
                    <h3 className='toCenter'>Active Posts</h3>
                    {
                        posts.map((post) => {
                            const { description, location, title, price, _id, active } = post;
                            
                            return (
                                <>
                                <div className='secondarySep' key={post._id}>
                                    {
                                        active ? (

                                            <div className='postContainer' id='postContainer' key={_id}>
                                                <div className='postContainer1'>
                                                    <h3>{title}</h3>
                                                    <p className='postings'>Description: </p><p>{description}</p>
                                                    <p className='postings'>Price: </p><p className='postingInfo'>{price}</p>
                                                    <p className='postings'>Location: </p><p className='postingInfo'>{location}</p>
                                                </div>
                                                <div className='buttonContainer'>
                                                    <button className='deletePost' 
                                                    onClick={() => {deletePost(token, _id)}}>
                                                        Delete
                                                    </button>
                                                    <button className='deletePost'>
                                                        <Link className='maintainLink' to={`/posts/edit-post/${_id}`}>Edit</Link>
                                                    </button>
                                                </div>
                                                <p className='postActive'>This post is active.</p>
                                            </div>

                                        ) : (
                                            <p></p>
                                        )
                                    }

                                </div>
                                </>
                            )
                        })
                    }
                    </div>
                    <div className='profilePostsContainer'>
                        <div className='messagesReceivedContainer'>
                            <h3 className='toCenter'>Messages Received </h3>
                            {
                                messages && messages.map(message => {
                                    const fromUserID = message.fromUser._id;
                                    const { username } = message.fromUser;
                                    const { title } = message.post;
                                    if (userID !== fromUserID) {
                                        return (
                                            <div className='messagesReceivedSep'>
                                                <p className='receivedContent'>From User: {username}</p>
                                                <p className='receivedContent1'>About {title}</p>
                                                <div className='messagesReceivedSmallCon' key={message._id}>
                                                    <p className='messagesReceived'>{message.content}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className='messagesSentContainer'>
                            <h3 className='toCenter'>Messages Sent </h3>
                            {
                                messages && messages.map(message => {
                                    const fromUserID = message.fromUser._id;
                                    if (userID === fromUserID) {
                                        return (
                                            <div className='messagesSentSep'>
                                            <div className='messagesSentSmallCon' key={message._id}>
                                                <div className='messagesSent'>{message.content}</div>
                                            </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <h1>Waiting for profile to load...</h1>
        )
    }
}

export default Profile;