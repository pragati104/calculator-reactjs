import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [result, setresult] = useState("");

  const clickHandler = (e) => {
    setresult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setresult("");
  };

  const calculate = () => {
    setresult(eval(result).toString());
  };
  return (
    <div className="calci">
      <input type="text" placeholder="enter" id="answer" value={result} />
      <input
        type="button"
        value="9"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="/"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="button"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="clear"
        className="button button1"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value="="
        className="button button1"
        onClick={calculate}
      />
    </div>
  );
};

const container = (
  <div id="container">
    <App />
  </div>
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);
