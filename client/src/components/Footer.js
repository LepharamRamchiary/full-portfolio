import React from 'react'
import "./FooterStyle.css"

import { FaHome, FaMailBulk, FaPhone, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'


const Footer = () => {

    const openGmailCompose = () => {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=lepharamchiary@gmail.com");
    };

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Gogamukh, Dhemaji</p>
                            <p>Assam</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 91013 18307</h4>
                    </div>
                    <div className='email'>
                        <h4 onClick={openGmailCompose} style={{ cursor: 'pointer' }}>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> lepharamchiary@gmail.com
                        </h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About Me</h4>
                    <p>Hi, my name is Lepharam Ramchiary. I am a passionate web developer, skilled in HTML, CSS, and JavaScript. As a fresher, I am eager to create innovative and user-friendly interfaces.</p>
                    <div className='social'>
                        <a href='https://www.linkedin.com/in/lepharam-ramchiary-576282215/'><FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href='https://github.com/LepharamRamchiary'><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href='https://www.instagram.com/lepharam/'><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer