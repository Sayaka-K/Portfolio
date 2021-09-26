import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';


function HeroSection (){
    return (
        <div className='hero-container'>
            <video src='/videos/data-video.mp4' autoPlay loop muted />
            <h1>Hi, need a Data Scientist?</h1>
            <p>I am invested in positively impacting people’s lives </p>
            <div className="hero-btns">
                <Button scrollTo='my_projects' className='btns' buttonStyle='btn--outline' buttonsSize='btn--large' >
                    Experience
                </Button>
                <Button scrollTo='contact' className='btns' buttonStyle='btn--primary' buttonsSize='btn--large' >
                    Contact Me
                </Button>
            </div>
            <div className='hero-arrow-indicator'><i class="fas fa-arrow-circle-down"></i></div>
        </div>
        

    )
}

export default HeroSection;