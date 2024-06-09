import "./calculator.css";
import { useRef, useState } from "react";

function CalculatorButton({ className, value, buttonClick, type }) {
  return (
    <div className={className} onClick={() => buttonClick(value, type)}>
      {value}
    </div>
  );
}

function ThemePicker() {
  const themeContainer = useRef("");
  const theme1 = getTheme("--theme-1");
  const theme2 = getTheme("--theme-2");
  const theme3 = getTheme("--theme-3");

  function showThemes() {
    themeContainer.current.classList.toggle("hide");
  }

  function changeTheme(color, event) {
    document.documentElement.style.setProperty(
      "--calculator-background",
      color
    );
    // event.stopPropagation();
  }

  function getTheme(themeName) {
    const rootStyles = getComputedStyle(document.documentElement);
    const bgColor = rootStyles.getPropertyValue(themeName).trim();
    return bgColor;
  }

  return (
    <div className="theme-picker-container" onClick={showThemes}>
      <div className="theme-wrapper hide" ref={themeContainer}>
        <div className="theme-container">
          <div
            className="theme theme-1"
            onClick={(event) => changeTheme(theme1, event)}
          ></div>
          <div
            className="theme theme-2"
            onClick={(event) => changeTheme(theme2, event)}
          ></div>
          <div
            className="theme theme-3"
            onClick={(event) => changeTheme(theme3, event)}
          ></div>
        </div>
      </div>
    </div>
  );
}

function Calculator() {
  const [equation, setEquation] = useState("");
  const [preview, setPreview] = useState("");

  function buttonClick(value, type) {
    // eslint-disable-next-line
    switch (type) {
      case "number":
        if (value === "0" && equation === "") {
          setEquation("");
        } else {
          setEquation(equation + value);
        }
        break;

      case "clear":
        setEquation("");
        setPreview("");
        break;

      case "decimal":
        if (equation === "") {
          setEquation("0.");
        } else if (!equation.includes(".")) {
          setEquation(equation + ".");
        }
        break;

      case "operator":
        if (!(equation === "")) {
          setPreview(equation + " " + value);
          setEquation("");
        }
        break;

      case "equals":
        if (!(preview === "" && equation === "")) {
          // eslint-disable-next-line
          const result = eval(preview + equation);
          setPreview("");
          setEquation(result);
        }
        break;

      case "sign":
        if (equation.includes("-")) {
          setEquation(equation.slice(1));
        } else if (equation !== "") {
          setEquation("-" + equation);
        }
        break;

      case "percent":
        if (!(equation === "")) {
          // eslint-disable-next-line
          const result = eval(equation / 100);
          setEquation(result);
        }
        break;
    }
  }

  return (
    <div className="body-container">
      <ThemePicker />
      <div className="calculator-container">
        <div className="calculator-screen">
          <div className="equation">{preview}</div>
          <div className="current-value">{equation ? equation : "0"}</div>
        </div>
        <div className="calculator-buttons">
          <CalculatorButton
            className="button"
            value="C"
            buttonClick={buttonClick}
            type="clear"
          />
          <CalculatorButton
            className="button"
            value="+/-"
            buttonClick={buttonClick}
            type="sign"
          />
          <CalculatorButton
            className="button"
            value="%"
            buttonClick={buttonClick}
            type="percent"
          />
          <CalculatorButton
            className="button"
            value="/"
            buttonClick={buttonClick}
            type="operator"
          />
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
          <CalculatorButton
            className="button"
            value="*"
            buttonClick={buttonClick}
            type="operator"
          />
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
          <CalculatorButton
            className="button"
            value="-"
            buttonClick={buttonClick}
            type="operator"
          />
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
          <CalculatorButton
            className="button"
            value="+"
            buttonClick={buttonClick}
            type="operator"
          />
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
          <CalculatorButton
            className="button"
            value="="
            buttonClick={buttonClick}
            type="equals"
          />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
