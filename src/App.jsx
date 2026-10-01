import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [days, setDays] = useState(0);

  // STEP
  const increaseStep = () => {
    const newStep = step + 1;

    setStep(newStep);

    // Step ki value Count mein bhi same hogi
    setCount(newStep);
  };

  const decreaseStep = () => {
    if (step > 1) {
      const newStep = step - 1;

      setStep(newStep);

      // Step ki value Count mein bhi same hogi
      // setCount(newStep);
    }
  };

  // COUNT
  const increaseCount = () => {
    
    setCount(count * 2);

    // Date sirf 1 day increase
    setDays(days + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count / 2);

      // Date sirf 1 day decrease
      setDays(days - 1);
    }
  };

  // DATE
  const today = new Date();
  today.setDate(today.getDate() + days);

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="app">

      <div className="card">

        {/* STEP */}
        <div className="control">

          <button onClick={decreaseStep}>−</button>

          <div className="value">
            <span>Step:</span>
            <strong>{step}</strong>
          </div>

          <button onClick={increaseStep}>+</button>

        </div>


        {/* COUNT */}
        <div className="control">

          <button onClick={decreaseCount}>−</button>

          <div className="value">
            <span>Count:</span>
            <strong>{count}</strong>
          </div>

          <button onClick={increaseCount}>+</button>

        </div>


        {/* DATE */}
        <div className="date-box">
          <p>Today is</p>
          <h2>{formattedDate}</h2>
        </div>

      </div>

    </div>
  );
}

export default App;