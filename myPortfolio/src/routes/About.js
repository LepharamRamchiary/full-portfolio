import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Herobg from '../components/Herobg';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Herobg heading="ABOUT." text="I'm a fresh and friendly Full-Stack Developer, eager to innovate in web development." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About