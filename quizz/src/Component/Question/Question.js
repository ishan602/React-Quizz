import React, { useState, useEffect } from "react";
import "../Question-Template/Question-Template.css";
// import QuestionTemplate from "../Question-Template/Question-Template";
import axios from "axios";
function Question() {
  const [questionState, setQuestion] = useState({
    questions: []
  });
  var [filterQuestionState, setFilterQuestion] = useState({
    filterquestions: []
  });
  var [index, setIndex] = useState(1);
  useEffect(() => {
    axios
      .get("./data.json")
      .then(res => {
        console.log(res.data);
        setQuestion({ questions: res.data });
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  function RenderFirstQuestion() {
    console.log("Render First Question");
    console.log(index);
    setFilterQuestion({
      filterquestions: questionState.questions.filter(filterQuestion => {
        return filterQuestion.id === index;
      })
    });
    setIndex(index + 1);
  }
  function RenderNextQuestion() {
    let options = ["option1", "option2", "option3", "option4"];
    options.map(option => {
      var element = document.getElementById(option);
      var cla = element.className;
      if (cla != "") {
        element.className = "";
      }
    });
    console.log("Render Next Question");
    console.log(index);
    setFilterQuestion({
      filterquestions: questionState.questions.filter(filterQuestion => {
        return filterQuestion.id === index;
      })
    });
    setIndex(index + 1);
    if (index === questionState.questions.length) {
      document.getElementById("next-question").style.display = "none";
    }
  }
  if (index === 1) {
    setTimeout(RenderFirstQuestion, 1500);
  }
  function RightAnswer(id) {
    console.log("Right Answer");
    document.getElementById(id).classList.add("right");
  }
  function WrongAnswer(id) {
    console.log("Wrong Answer");
    document.getElementById(id).classList.add("wrong");
  }
  function DisableAnswer() {
    let options = ["option1", "option2", "option3", "option4"];
    options.map(option => {
      var element = document.getElementById(option);
      var cla = element.className;
      element.classList.add("disable");
    });
  }
  function AnswerVerification(ans, clkOption, id) {
    console.log(id);
    if (ans === clkOption) {
      RightAnswer(id);
      DisableAnswer();
    } else {
      WrongAnswer(id);
      DisableAnswer();
    }
  }
  return (
    <>
      {filterQuestionState.filterquestions.map(question => (
        <div className='question'>
          <div className='question__heading'>
            <span>{question.question}?</span>
          </div>
          <div className='question__answer'>
            <ul>
              <li
                className=''
                id='option1'
                onClick={() =>
                  AnswerVerification(
                    question.answer,
                    question.options[0],
                    "option1"
                  )
                }
              >
                <span className='option-heading'>a</span>
                <span className='option-text'>{question.options[0]}</span>
              </li>
              <li
                className=''
                id='option2'
                onClick={() =>
                  AnswerVerification(
                    question.answer,
                    question.options[1],
                    "option2"
                  )
                }
              >
                <span className='option-heading'>b</span>
                <span className='option-text'>{question.options[1]}</span>
              </li>
              <li
                className=''
                id='option3'
                onClick={() =>
                  AnswerVerification(
                    question.answer,
                    question.options[2],
                    "option3"
                  )
                }
              >
                <span className='option-heading'>c</span>
                <span className='option-text'>{question.options[2]}</span>
              </li>
              <li
                className=''
                id='option4'
                onClick={() =>
                  AnswerVerification(
                    question.answer,
                    question.options[3],
                    "option4"
                  )
                }
              >
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
