import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';


function Vision() {
  return (
    <>
    <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      
    
    </>
  );
}

export default Vision;
