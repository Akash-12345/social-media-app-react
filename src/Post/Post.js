import React from 'react'
import { useState } from 'react'
import './post.css'

const Post = () => {
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("");

  
    const handleSubmit = (event) => {
      event.preventDefault();
      setUsername(inputValue);
      setInputValue("");
    };
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
   
  return (
    <div className="p">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='username'  onChange={handleChange} name="user_name" />
            <input type="text" placeholder='useremail' name="user_email" />
            <button className="submit">SUBMIT</button>
        {username && <p>Hello, {username}!</p>}
        </form>
        
    
    </div>
  )
}

export default Post