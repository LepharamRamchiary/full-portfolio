import React from 'react'
import "./HeroStyle.css";

import HeroImage from "../assets/HeroImage.jpg";
import { Link } from 'react-router-dom';


const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={HeroImage}  alt='HeroImage'/>
        </div>
        <div className='content'>
            <p>HI, I'M LEPHARAM</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg