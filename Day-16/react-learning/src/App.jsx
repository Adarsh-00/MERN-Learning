import React from 'react';
import Kid from './kid';
import Adult from './adult';
import Greet from './greet';
const App = () => {

  const age = 20;
  return (
    <>
      <Greet person = "Adarsh"/>
      {age < 18 ? <Kid/> : <Adult/>}
    </>
  );
}

export default App;