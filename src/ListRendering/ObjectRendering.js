import React from 'react';

function ObjectRendering() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 23,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 32,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 25,
      skill: 'Vue',
    },
  ];
  const PersonList = persons.map((person) => (
    <h2 key={person.id}>
      I am {person.name}, I'm {person.age} years old. I know {person.skill}
    </h2>
  ));
  return <div>{PersonList}</div>;
}

export default ObjectRendering;
