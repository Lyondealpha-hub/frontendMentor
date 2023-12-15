import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Missing from './components/MissingGra';
import Support from './components/Support';
import Contact from './components/Contact';
import Grade from './components/Grade';
import 'devextreme/dist/css/dx.light.css';
import Navbar from './components/Nav';
import Login from './components/Login';


const App = () => {
  return (

    // <main className="w-screen h-screen">

    <BrowserRouter >

      {/* <Navbar />
      <Home />
      <Login /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Missing" element={<Missing />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Grade" element={<Grade />} />
        <Route path="/Login" element={<Login />} />

      </Routes>


    </BrowserRouter>
    // </main>

  );
};
export default App;