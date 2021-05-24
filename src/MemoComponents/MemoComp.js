import React from 'react';

function MemoComp({name}) {
  console.log('Memo Component');
  return <div>{name}'s MemoComponent</div>;
}

export default React.memo(MemoComp);
