import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhotoGallery1 from './components/PhotoGallery1';
import PhotoGallery2 from './components/PhotoGallery2';
import CommercialPhotographySection from './components/AboutHome';
import ContactInvitation from './components/ContactInvite';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PhotoGallery1 />
      <CommercialPhotographySection />
      <PhotoGallery2 />
      <ContactInvitation />
      <Footer />
    </div>
  );
}

export default App;
