import React, { useState, useEffect } from "react";
import QuestionTemplate from "../Question-Template/Question-Template";
import axios from "axios";
function Question() {
  const [questionState, setQuestion] = useState({
    questions: []
  });
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
  return (
    <>
      {questionState.questions.slice(0, 1).map(question => (
        <QuestionTemplate
          key={question.id}
          {...question}
          length={questionState.questions.length}
        ></QuestionTemplate>
      ))}
    </>
  );
}
export function RenderNextQuestion(e) {
  var current = parseInt(e.target.id, 10);
  if (current == null) {
    current = 0;
  }
  let next = current + 1;

  return console.log("Hello");
}
export default Question;
