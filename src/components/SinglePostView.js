import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePostView = ({ posts }) => {
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  return (
      <div className='postContainer' id='postContainer'>
          <div className='postContainer1'>
              <h3>{title}</h3>
              <p className='postings'>Description: </p><p>{description}</p>
              <p className='postings'>Price: </p><p className='postingInfo'>{price}</p>
              <p className='postings'>Location: </p><p className='postingInfo'>{location}</p>
              <div className='buttonContainer'><button id='contactSeller'>Contact Seller</button></div>
          </div>
      </div>
  )
}

export default SinglePostView;