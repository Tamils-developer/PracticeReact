import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Details = () => {
  

  const { id } = useParams(); // Get the photo ID from the URL
  const [post, setPost] = useState() as any;

  useEffect(() => {
    // Fetch the post using the photo ID from the posts API
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
    
  }, [id]);

  return (
    <div>
      <h2>Post Details</h2>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


export default Details