
import React, { useState, useEffect } from "react";
import db from "../../firebaseConfig";


export default function PostSection(props) { 
    
const [post, setPost] = useState("")

const fetchData = async ()=>{
    const res = await db.collection('recieverPost').doc('ETXSQQswYmM2vx0qODfr').get()
    const data = res.data()
    console.log(data);
    setPost(data)
}
useEffect(()=>{
    fetchData()
},[])
  return (
    <div>
      <h2>{post.about}</h2>
      <p>{post.description}</p>
      <img src={post.image} alt="post"/>
    </div>
  );

}
  