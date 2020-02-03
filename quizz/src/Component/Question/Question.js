import React from "react";
import "./Question.css";
function Question(props) {
  return (
    <div className='question'>
      <div className='question__heading'>
        <span>What is a first question?</span>
      </div>
      <div className='question__answer'>
        <ul>
          <li className=''>
            <span>A</span>Option 1
          </li>
          <li className=''>
            <span>B</span>Option 2
          </li>
          <li className=''>
            <span>C</span>Option 3
          </li>
          <li className=''>
            <span>D</span>Option 4
          </li>
        </ul>
      </div>
      <div className='question__submit-button'>
        <button>next question</button>
      </div>
      <div className='question__number'>
        <span>Question:&nbsp;-&nbsp;</span>
        <span>1</span>&nbsp;/&nbsp;8
      </div>
    </div>
  );
}
export default Question;
