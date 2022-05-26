import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
     <Counter initialValue={10}/>
     
    </div>
  );
}

export default App;
