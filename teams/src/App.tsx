import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Directory from '../src/components/Directory';
import Integretion from './components/Integration'; 
import Reporting from './components/Reporting'; 
import Support from './components/Support';
import Contact from './components/Validating'; 
import 'devextreme/dist/css/dx.light.css';
import Navbar from './components/Nav';


const App = () => {
  return (

    // <main className="w-screen h-screen">

      <BrowserRouter >
      
      <Navbar />
      <Home/>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="about" element={<Integretion />} />
          <Route path="contact" element={<Reporting />} />
          <Route path="contact" element={<Support />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        
      </BrowserRouter>
    // </main>
   
  );
};
export default App;