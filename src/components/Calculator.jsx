import "./calculator.css";
import { useReducer } from "react";

function CalculatorButton({ className, value, buttonClick, type }) {
  return (
    <div className={className} onClick={() => buttonClick(value, type)}>
      {value}
    </div>
  );
}

function Calculator() {
  const [equation, dispatch] = useReducer(reducer, "");

  function reducer(equation, action) {
    switch (action.type) {
      case "number":
        if (equation === "" && action.value === "0") {
          return "";
        } else {
          return equation + action.value;
        }

      case "decimal":
        if (equation === "") {
          return "0.";
        } else if (equation.includes(".")) {
          return equation;
        } else {
          return equation + ".";
        }

      case "operator":
        break;

      case "clear":
        return "";
    }
  }

  function buttonClick(value, type) {
    dispatch({ type: type, value: value });
  }

  return (
    <div className="body-container">
      <div className="calculator-container">
        <div className="calculator-screen">
          <div className="equation">10 + 10 =</div>
          <div className="current-value">{equation ? equation : "0"}</div>
        </div>
        <div className="calculator-buttons">
          <CalculatorButton
            className="button"
            value="C"
            buttonClick={buttonClick}
            type="clear"
          />
          <CalculatorButton className="button" value="+/-" />
          <CalculatorButton className="button" value="%" />
          <CalculatorButton className="button" value="/" />
          <CalculatorButton
            className="button"
            value="7"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="8"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="9"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton className="button" value="x" />
          <CalculatorButton
            className="button"
            value="4"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="5"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="6"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton className="button" value="-" />
          <CalculatorButton
            className="button"
            value="1"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="2"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="3"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton className="button" value="+" />
          <CalculatorButton
            className="button zero"
            value="0"
            buttonClick={buttonClick}
            type="number"
          />
          <CalculatorButton
            className="button"
            value="."
            buttonClick={buttonClick}
            type="decimal"
          />
          <CalculatorButton className="button" value="=" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
