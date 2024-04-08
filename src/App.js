import React from 'react';

import { Navbar, Header, Services } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        
      </div>
      <Services />
    </div>
  )
}

export default App