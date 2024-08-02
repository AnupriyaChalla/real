// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footer from './Components/Footer';
import FloatingButton from './Components/FloatingButton';
import AdHome from './Components/AdminDashboard/AdHome';
import FlatForm from './Components/AdminDashboard/FlatForm';
import ResidentialList from './Components/ResidentialList';
import FlatsList from './Components/FlatsList';
import ApartmentList from './Components/ApartmentList';
import './App.css';
import PageTransition from './Components/TransitionPage';
function App() {
  return (
    <Router>
      <div>

        <FloatingButton />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<PageTransition><About /></PageTransition>} />
          <Route path='/contact' element={<PageTransition><Contact /></PageTransition>} />
          <Route path='/Services' element={<PageTransition><Services /></PageTransition>} />
          <Route path='/mars' element={<AdminLayout />} />
          <Route path="/residentialList" element={<ResidentialList />} />
          <Route path="/flatList" element={<FlatsList />} />
          <Route path="/apartmentList" element={<ApartmentList />} />

        </Routes>
      </div>
    </Router>
  );
}

function AdminLayout() {
  // Check if current route is '/admin'
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/mars');

  // Render different layouts based on route
  return (
    <div>
      {isAdminPage ? null : <Navbar />}
      <AdHome />
      {isAdminPage ? null : <Footer />}
    </div>


  );
}

export default App;
