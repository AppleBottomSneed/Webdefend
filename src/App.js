import React from 'react';

import { Navbar, Header, Services, Aboutus, Features, Contact, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      
      <Navbar />
      <Header />
      <Services />
      <Aboutus />
      <Features />
      <div className='colour__bg'>

        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App