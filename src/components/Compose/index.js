import React from 'react';
import './Compose.css';

export default function Compose(props) {
    return (
      <div className="compose">
        <textarea rows="2" placeholder="Type a message, @name" className="compose-input"/>
        {/* <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        /> */}

        {
          props.rightItems
        }
      </div>
    );
}