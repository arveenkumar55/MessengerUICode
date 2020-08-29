import React, {useEffect, useState} from 'react';
import './Compose.css';

export default function Compose(props) {
  useEffect(() => {
    var textarea = document.getElementById("autosize");
if ('onpropertychange' in textarea) { // IE
  textarea.onpropertychange = adjust;
} else if ('oninput' in textarea) {
  textarea.oninput = adjust;
}
   setTimeout(adjust.bind(textarea));
  },[])
    return (
      <div className="compose">
        <textarea rows="2" placeholder="Type a message, @name" className="compose-input" id="autosize"/>
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

function adjust() {
  var style = this.currentStyle || window.getComputedStyle(this);
  var boxSizing = style.boxSizing === 'border-box'
      ? parseInt(style.borderBottomWidth, 10) +
        parseInt(style.borderTopWidth, 10)
      : 0;
  this.style.height = '';
  this.style.height = (this.scrollHeight + boxSizing) + 'px';
};