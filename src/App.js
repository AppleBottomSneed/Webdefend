import React from 'react';

import { Navbar, Header, Services, Aboutus } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Services />
      <Aboutus />
    </div>
  )
}

export default App