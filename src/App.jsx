import './App.css';
import React, { useState, useEffect } from 'react'
import axios from "./axios";

import Routing from "./components/Routing/Routing";



function App() {
  
  return (
    <div className="App" >
      <Routing />
    </div>
  );
}

export default App;
