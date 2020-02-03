import React from "react";
import ReactDOM from "react-dom";
import Popup from "./Component/Pop-up/Popup";
import Footer from "./Component/Footer/Footer";
import Question from "./Component/Question/Question";

ReactDOM.render(<Popup></Popup>, document.getElementById("root"));
ReactDOM.render(<Question></Question>, document.getElementById("question"));
ReactDOM.render(<Footer></Footer>, document.getElementById("footer"));
