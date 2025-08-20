import React from 'react';

const person = (props) => {
  return (
    <div>
      <h1>Hii! my name is {props.name} and I'm {props.age} years old</h1>
    </div>
  );
}

export default person;
