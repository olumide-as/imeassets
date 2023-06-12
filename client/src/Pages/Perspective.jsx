import React, { useEffect, useState } from 'react'
import { Posts, Hero} from '../Components'
import axios from "axios"
import { useLocation } from 'react-router-dom';



const Perspective = () => {

  const [posts,setPosts] = useState([]);
  const {search} = useLocation();

useEffect(()=>{
  const fetchPosts = async () => {
    const res = await axios.get("/posts" + search);
    setPosts(res.data);
  };
  fetchPosts();
},[search]);


  return (
    <div>
        
        <Hero
        heroheading="NEWS AND ARTICLES"
        herosubheading="Stay Informed, Stay Connected"
        text="Discover the Latest News and Exciting Events in IME."
        bg="https://res.cloudinary.com/dz2fc3ioz/image/upload/v1684763064/imeassets/pexels-alena-darmel-7710082_blb0rv.jpg"
      />
        <Posts posts={posts}/>

        
    </div>
  )
}

export default Perspective