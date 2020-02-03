import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <small>
          You can find the code repo on{" "}
          <a href='https://github.com/ishan602/React-Quizz'>Github</a>. Feel
          free to make any pull requests to improve the aplication.
        </small>
        <p>
          Built with &#x2665; by <a href='#'>Ishan Kumar</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
