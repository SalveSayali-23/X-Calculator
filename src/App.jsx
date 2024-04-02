import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const appendToInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="display">{result}</div>
      <div className="calculator">
        <div className="buttons">
          <button onClick={() => appendToInput("7")}>7</button>
          <button onClick={() => appendToInput("8")}>8</button>
          <button onClick={() => appendToInput("9")}>9</button>
          <button onClick={() => appendToInput("+")}>+</button>
          <button onClick={() => appendToInput("4")}>4</button>
          <button onClick={() => appendToInput("5")}>5</button>
          <button onClick={() => appendToInput("6")}>6</button>
          <button onClick={() => appendToInput("-")}>-</button>
          <button onClick={() => appendToInput("1")}>1</button>
          <button onClick={() => appendToInput("2")}>2</button>
          <button onClick={() => appendToInput("3")}>3</button>
          <button onClick={() => appendToInput("*")}>*</button>
          <button onClick={() => clearInput()}>C</button>
          <button onClick={() => appendToInput("0")}>0</button>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => appendToInput("/")}>/</button>
        </div>
      </div>
    </div>
  );
};

export default App;
