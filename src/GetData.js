import React, { useState } from 'react';
import ReactDom from 'react-dom';

const GetData = (props) => {

    const [post, setPost] = useState("");

    const handleChange = (e) => {
        setPost(e.target.value) 
    };
  
    const handleSubmit = () => {
      props.addData(post);
      setPost(""); 
    };

    return(

        <div className="form-group" >
            <input onChange={handleChange} value={post} placeholder="Start typing to post..." className="inputClass"/>
            <button onClick={handleSubmit} className="btn btn-primary">Post</button>
            <input type="file" />
            <img src="./Downloads/1.png" />
        </div>
        
    )
}

export default GetData;