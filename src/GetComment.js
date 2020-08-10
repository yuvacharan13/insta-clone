import React, { useState } from 'react';
import ListComment from "./ListComment";
import ReactDom from 'react-dom';

const GetComment = (props) => {

    const [comment, setComment] = useState("");
    // const [key, setKey] = useState("");

    const addComment = (e) => {
        setComment(e.target.value); 
    }

    const handleComment = () => {
        postComment(comment);
        setComment("");
    }

    // const [postcomment, setPostcomment] = useState( {comments: []});
    const [postcomment, setPostcomment] = useState([]);

    const postComment = (value) => {
        // const id = Math.floor(Math.random() * 100) + 1;
        // const currentPost = { id: id, comment: value };
        setPostcomment([...postcomment, value]);
    }

    return( 

        <div className="form-group" >
            <input onChange={addComment}  value={comment} placeholder="Enter your comments here..." className="commentClass"/>
            <button onClick={handleComment}  className="btn btn-primary">comment</button>
            <ListComment commentz={postcomment} />
        </div>
        
    )
}

export default GetComment;