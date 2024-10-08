

import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const FetchComp = () => {
  const [posts, setPosts] = useState([]) as any;
  const [apiId, setApiId] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
    
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
          );
           console.log(response);
        const data = await response.json();
        setPosts(data.slice(0, 20)); 
      console.log(data);
               console.log("data");

     
    };

    fetchPosts();
  }, []);

  

  return (
    <div className="grid-container">
      {posts.map((post: any) => (
        <div key={post.id} className="grid-item">
          
          <Link to={`/details/${post.id}`}>
            {/* <Link to={`/details`} state={{ post }}></Link> */}
            <img src={post.url} alt={post.name} />
            <p>{post.title}</p>
          </Link>
        </div>
        //   <li key={post.id} >
        //     <h2>{post.title }</h2>
        //     <img src={post.url} />
        //   </li>
      ))}
    </div>
  );
};

export default FetchComp;
