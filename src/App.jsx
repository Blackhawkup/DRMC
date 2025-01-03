import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage_page/Homepage.jsx';
import AboutUs from './components/AboutUs_page/AboutUs.jsx';
import Services from './components/Services_page/Services.jsx';
import ContactMe from './components/Contact_page/ContactMe.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </Router>
    );
}

export default App;