import React, { useState, useEffect } from "react";
import "../Question-Template/Question-Template.css";
// import QuestionTemplate from "../Question-Template/Question-Template";
import axios from "axios";
function Question() {
  const [questionState, setQuestion] = useState({
    questions: []
  });
  var [index, setIndex] = useState(1);
  var filterQuestion;
  useEffect(() => {
    axios
      .get("./data.json")
      .then(res => {
        setQuestion({ questions: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  console.log(questionState.questions);
  filterQuestion = questionState.questions.filter(question => {
    return question.id === index;
  });
  function RenderNextQuestion() {
    if (index < questionState.questions.length) {
      setIndex(index + 1);
      filterQuestion = questionState.questions.filter(question => {
        return question.id === index;
      });
    } else {
      console.log("Limit Reached");
      document.getElementById("next-question").style.display = "none";
    }
  }

  return (
    <>
      {filterQuestion.map(question => (
        <div className='question'>
          <div className='question__heading'>
            <span>{question.question}?</span>
          </div>
          <div className='question__answer'>
            <ul>
              <li className=''>
                <span className='option-heading'>a</span>
                <span className='option-text'>{question.options[0]}</span>
              </li>
              <li className=''>
                <span className='option-heading'>b</span>
                <span className='option-text'>{question.options[1]}</span>
              </li>
              <li className=''>
                <span className='option-heading'>c</span>
                <span className='option-text'>{question.options[2]}</span>
              </li>
              <li className=''>
                <span className='option-heading'>d</span>
                <span className='option-text'>{question.options[3]}</span>
              </li>
            </ul>
          </div>
          <div
            className='question__submit-button'
            id='next-question'
            onClick={RenderNextQuestion}
          >
            <button id={question.id}>next question</button>
          </div>
          <div className='question__number'>
            <span>Question:&nbsp;-&nbsp;</span>
            <span>{question.id}</span>&nbsp;/&nbsp;
            {questionState.questions.length}
          </div>
        </div>
      ))}
    </>
  );
}

export default Question;
