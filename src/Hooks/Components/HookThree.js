import React, {useState} from 'react';

function HookThree() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  return (
    <div>
      <div>
        <input
          type="text "
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <input
          type="text "
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />
      </div>
      <div>
        <h2>My first name is : {name.firstName}</h2>
        <h2>My last name is : {name.lastName}</h2>
      </div>
      <div>
        <h1>{JSON.stringify(name)}</h1>
      </div>
    </div>
  );
}

export default HookThree;
