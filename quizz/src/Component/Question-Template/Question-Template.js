import React from "react";
import "./Question-Template.css";
import { RenderNextQuestion } from "../Question/Question";
function QuestionTemplate(props) {
  return (
    <div className='question'>
      <div className='question__heading'>
        <span>{props.question}?</span>
      </div>
      <div className='question__answer'>
        <ul>
          <li className=''>
            <span className='option-heading'>a</span>
            <span className='option-text'>{props.options[0]}</span>
          </li>
          <li className=''>
            <span className='option-heading'>b</span>
            <span className='option-text'>{props.options[1]}</span>
          </li>
          <li className=''>
            <span className='option-heading'>c</span>
            <span className='option-text'>{props.options[2]}</span>
          </li>
          <li className=''>
            <span className='option-heading'>d</span>
            <span className='option-text'>{props.options[3]}</span>
          </li>
        </ul>
      </div>
      <div
        className='question__submit-button'
        id='next-question'
        onClick={RenderNextQuestion}
      >
        <button id={props.id}>next question</button>
      </div>
      <div className='question__number'>
        <span>Question:&nbsp;-&nbsp;</span>
        <span>{props.id}</span>&nbsp;/&nbsp;{props.length}
      </div>
    </div>
  );
}
export default QuestionTemplate;
