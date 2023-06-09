import React, { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterControls
        incrementCounter={incrementCounter}
        decrementCounter={decrementCounter}
      />
    </div>
  );
};

const CounterDisplay = ({ counter }) => {
  return <h2>Counter: {counter}</h2>;
};

const CounterControls = ({ incrementCounter, decrementCounter }) => {
  return (
    <div>
      <button className="button " onClick={incrementCounter}>
        Increment
      </button>
      <button
        className="button "
        onClick={decrementCounter}
        style={{ marginLeft: 20 }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterPage;
