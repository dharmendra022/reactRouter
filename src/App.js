import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';

const App = () => {
  return (
    <>
    <h1>Welcome To React Router</h1>
      <Routes>
      <Route exact path='/' element={<Contact/>}/>
      {/* <Route path='contact' component={Contact} /> */}
        <Route exact path='/about' element={<About/>} />
        <Route element={<Error/>} />
        {/* <Link to="about">About PAge</Link> */}
        
      </Routes>
      {/* <Link to="about">About PAge</Link> */}
      
      
    </>
  )
};

export default App;
