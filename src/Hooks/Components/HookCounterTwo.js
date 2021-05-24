import React, {useState} from 'react';

function HookCounterTwo() {
  let initialValue = 0;
  const [count, setCount] = useState(initialValue);
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
      <button onClick={decrement}>Decrement Count</button>
      <button
        onClick={() => {
          setCount(initialValue);
        }}
      >
        Reset Count
      </button>
    </div>
  );
}

export default HookCounterTwo;
