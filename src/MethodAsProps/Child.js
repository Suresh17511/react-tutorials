import React from 'react';

function Child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Suresh')}>Greet Parent</button>
    </div>
  );
}

export default Child;
