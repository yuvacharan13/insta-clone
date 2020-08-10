import React, { useState } from "react";
import GetComment from "./GetComment";

// import CommentData from "./CommentData";

const ListData = (props) => {

    

    return (
        <div>
            <ul className="list-group">
          {props.postz.map((post, value) => {
            return (
              <li className="list-group-item" key={value}>
                <span>
                  <span>{post.title}</span>
                </span>
                <GetComment />
                {/* <PostComment postComment={postComment} /> */}
                {/* <CommentData /> */}
              </li>
            );
          })}
        </ul>
        </div>
        

    );
}


export default ListData;






