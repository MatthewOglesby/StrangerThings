import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ posts }) => { // by putting our posts as our parameter, it destructures our posts and sets it as a prop


    return (
        <div className='postBody'>
            {
                posts.map((post) => {
                    const { description, location, title, price, _id, isAuthor } = post;
                    return (
                        <div className='postContainer' id='postContainer' key={_id}>
                            <div className='postContainer1'>
                                <h3>{title}</h3>
                                <p className='postings'>Description: </p><p>{description}</p>
                                <p className='postings'>Price: </p><p className='postingInfo'>{price}</p>
                                <p className='postings'>Location: </p><p className='postingInfo'>{location}</p>
                                <div className='buttonContainer'><button id='contactSeller'>Contact Seller</button></div>
                                
                                {
                                    isAuthor ? (
                                        <button>You are the author</button>
                                    ) : (
                                        <button id='linkToSPV2'><Link to={`/posts/${_id}`} id='linkToSPV'>View</Link></button>
                                    ) 
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    
}
   

export default Posts;