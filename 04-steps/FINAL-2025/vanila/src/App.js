import React from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

function App() {
  const step = 1;

  function nextStep() {
    alert("Next");
  }
  function prevStep() {
    alert("Previous");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>1</div>
        <div className={`${step >= 3 ? "active" : ""}`}>1</div>
      </div>
      <p className="message ">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
