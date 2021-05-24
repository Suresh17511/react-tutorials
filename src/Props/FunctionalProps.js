import React from 'react';

function FunctionalProps(props) {
  return (
    <div>
      <h2>
        {props.name} as {props.heroName}
      </h2>
    </div>
  );
}

export default FunctionalProps;
