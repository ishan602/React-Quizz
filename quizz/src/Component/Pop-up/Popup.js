import React from "react";
import "./Pop-up.css";
import { Start } from "./Pop-up.js";

const Popup = () => {
  return (
    <div className='popup' id='popup'>
      <div className='popup__content'>
        <div className='popup__content__heading'>
          <h1>welcome to the quizz</h1>
        </div>
        <div className='popup__content__description'>
          <p>This is a quiz application built using ReactJS. </p>
          <p>
            Currently it's loaded with CSS questions from W3Scools, but you can
            easily load any type of questions into it.
          </p>
          <p>
            It will dynamically load the question &amp; answers pair and upload
            them into the components.
          </p>
        </div>
        <div className='popup__content__startButton' id='startButton'>
          <button onClick={Start}>start the quizz</button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
