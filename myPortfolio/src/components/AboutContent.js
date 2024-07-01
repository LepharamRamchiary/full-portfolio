import React from 'react'
import "./AboutContentStyle.css"
import { Link } from 'react-router-dom'

import React1 from "../assets/react1.png"
import React2 from "../assets/react2.jpg"

import Java from "../assets/java.png";
import JS from "../assets/jsn.png"
import HTML from "../assets/htmln.png"
import Css from "../assets/cssn.png"
import ReactJS from "../assets/ReactJSn.png"
import NodeJS from "../assets/nodeJsn.png"
import MySql from "../assets/mySqln.png"
import Redux from "../assets/reduxn.png"
import Tail from "../assets/tailwindn.png"
import Git from "../assets/github.png"
import FireBase from "../assets/firebase.png"
import Vercel from "../assets/ver.png"
import Mongo from "../assets/mongo-removebg-preview.png"
import Express from "../assets/express-removebg.png"

const AboutContent = () => {
    return (
        <div className='about-skills'>
            <div className='about'>
                <div className='left'>
                    <h1>Who Am I?</h1>
                    <p>I'm a fresh Full-Stack Developer, specializing in both frontend and backend development, embarking on an exhilarating journey brimming with passion and determination. Eager to learn, grow, and craft captivating user experiences and robust backend solutions that leave a lasting impression.</p>
                    <a href='https://drive.google.com/file/d/1N-rxeLIuQ1e8TdxMqDzB20h34fRlepE1/view?usp=sharing' className='btn'>resume</a>
                    <Link to="/contact">
                        <button className='btn'>Contact</button>
                    </Link>
                </div>

                <div className='right'>
                    <div className='img-container'>
                        <div className='img-stack top'>
                            <img src={React1} alt='recat_image' className='img' />
                        </div>
                        <div className='img-stack bottom'>
                            <img src={React2} alt='recat_image' className='img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h1>My Skills</h1>
                <div className='skills-container'>
                    <div className='skills-stack'>
                        <img src={Java} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={HTML} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={Css} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={JS} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={Mongo} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={Express} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={ReactJS} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={NodeJS} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={Redux} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={Tail} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={MySql} alt='skill_iamge' />
                    </div>


                    <div className='skills-stack'>
                        <img src={Git} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={FireBase} alt='skill_iamge' />
                    </div>
                    <div className='skills-stack'>
                        <img src={Vercel} alt='skill_iamge' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutContent