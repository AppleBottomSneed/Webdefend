import React from 'react';

import { Navbar, Header, Services, Aboutus, Features, Contact } from "./components";
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
      <Features />
      <Contact />
    </div>
  )
}

export default App