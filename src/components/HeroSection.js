import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src="/v1/video.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What Are You Waiting For?</p>
      <div className="hero-btns">
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>
          Watch Trailer 
          <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
