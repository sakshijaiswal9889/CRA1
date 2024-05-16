import React, { useState } from 'react';

function CounterApp() {
  // State for the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;