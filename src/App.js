import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhotoGallery1 from './components/PhotoGallery1';

import CommercialPhotographySection from './components/AboutHome';
import ContactInvitation from './components/ContactInvite';
import Footer from './components/footer';
import Contact from './contact';// Make sure this path is correct
import About from './about';// Make sure this path is correct

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
          <>
          <CommercialPhotographySection />
            <PhotoGallery1 />
            <ContactInvitation />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
