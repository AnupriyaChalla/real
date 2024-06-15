// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
//import Hero from './Components/Hero';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Empty from './Components/Empty';
import Footer from './Components/Footer';
import FloatingButton from './Components/FloatingButton';
function App() {
  return (
    <Router>
      <div>
      
        <Navbar/>
        <FloatingButton/>
        <Routes>
          
          <Route path='/' exact element= {<Home/>} />
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact' exact  element={<Contact/>} /> 
          <Route path='/empty' exact element={<Empty/>} />         
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;