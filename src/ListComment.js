import React, { useState } from "react";

const ListComment = (props) => {


    


    return (
        <div>
            <ul className="list-group">
          {props.commentz.map((value, idx) => {
            return (
              <li className="list-group-item" key={idx}>
                <span>
                  <span>{value}</span>
                </span>
              </li>
            );
          })}
        </ul>
        </div>
        

      );
}


export default ListComment;