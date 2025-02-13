import React, { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpened, setIsOpened] = useState(true);

  function nextStep() {
    if (step < 3) setStep((s) => s + 1);
  }
  function prevStep() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpened(!isOpened)}>
        &times;
      </button>
      {isOpened && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
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
      )}
    </>
  );
}

export default App;
