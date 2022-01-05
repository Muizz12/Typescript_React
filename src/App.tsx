import React, { FC } from 'react';
import './App.css';
import { haircolor, Person } from './components/Person';


const App: FC = () => {

  return (
    <div className="App">
      <Person name="Moiz" age={25} email='kmuizz319@gmail.com' haircolor={haircolor.Pink} />


    </div>
  );
}

export default App;
