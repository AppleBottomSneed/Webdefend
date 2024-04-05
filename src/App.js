import React from 'react';

import { Navbar, Header } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      
    </div>
  )
}

export default App