import React from 'react';
import Cards from './components/Cards';
import ca from './assets/ca.png';
import sp from './assets/sp.png';

const App = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Cards pic={sp} name='spiderman' des='A Spider in Human form'/>
      <Cards pic={ca} name='Captain America' des='A product of an experiment'/>
    </div>
  );
}

export default App;
