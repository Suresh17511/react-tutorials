import React, {useState} from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={() => setCount(count + 1)}>Count Increment</button>
    </div>
  );
}

export default HookCounter;
