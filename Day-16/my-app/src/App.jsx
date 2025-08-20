import React from 'react';
import Person from './person';
import DangerSpeed from './dangerSpeed';
import SafeSpeed from './safeSpeed';

const App = () => {
  const speed = 58;
  return (
    <div>
      <Person name = 'Adarsh' age='20'/>
      {speed > 60 ? <DangerSpeed/> : <SafeSpeed/>}
    </div>
  );
}

export default App;
