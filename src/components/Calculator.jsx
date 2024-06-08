import "./calculator.css";

function CalculatorButton({ className, value }) {
  return <div className={className}>{value}</div>;
}

function Calculator() {
  return (
    <div className="body-container">
      <div className="calculator-container">
        <div className="calculator-screen">1</div>
        <div className="calculator-buttons">
          <CalculatorButton className="button" value="C" />
          <CalculatorButton className="button" value="+/-" />
          <CalculatorButton className="button" value="%" />
          <CalculatorButton className="button" value="&#247;" />
          <CalculatorButton className="button" value="7" />
          <CalculatorButton className="button" value="8" />
          <CalculatorButton className="button" value="9" />
          <CalculatorButton className="button" value="x" />
          <CalculatorButton className="button" value="4" />
          <CalculatorButton className="button" value="5" />
          <CalculatorButton className="button" value="6" />
          <CalculatorButton className="button" value="-" />
          <CalculatorButton className="button" value="1" />
          <CalculatorButton className="button" value="2" />
          <CalculatorButton className="button" value="3" />
          <CalculatorButton className="button" value="+" />
          <CalculatorButton className="button zero" value="0" />
          <CalculatorButton className="button" value="." />
          <CalculatorButton className="button" value="=" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
