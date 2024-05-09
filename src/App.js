
import './App.css';
import { generateMap } from './Generator.js'; 
import { useState } from 'react';
import Header from './Header.jsx';
import Input from './Input.jsx';

function App() {


  return (
    <div className="bgImage">
    <Header></Header>
    <Input></Input>
    </div>
  );
}

export default App;