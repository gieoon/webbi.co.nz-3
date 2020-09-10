import React from 'react';
import './App.scss';
import './checkbox.css';
import './mobile.scss';
import Header from './components/Header';
import Title from './components/Title';
import Intro from './components/Intro';
import Features from './components/Features';
import Works from './components/Works';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Intro />
      <Works />
      <About />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

