import React, { useState, useEffect } from "react";
import QuestionTemplate from "../Question-Template/Question-Template";
import axios from "axios";
function RenderNextQuestion(e) {
  let current = parseInt(e.target.id, 10);
  let next = current + 1;
  const [questionState, setQuestion] = useState({
    questions: []
  });
  useEffect(() => {
    axios
      .get("./data.json")
      .then(res => {
        setQuestion({ questions: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {questionState.questions.slice(current, next).map(question => (
        <QuestionTemplate
          key={question.id}
          {...question}
          length={questionState.questions.length}
        ></QuestionTemplate>
      ))}
    </>
  );
}
export default RenderNextQuestion;
