import React from 'react';

function StringArrayRender() {
  const names = ['Bruce', 'Clark', 'Diana'];
  const NameList = names.map((name, index) => (
    <h2>
      {index} {name}
    </h2>
  ));
  return <div>{NameList}</div>;
}

export default StringArrayRender;
