import React from 'react';
// import { Redirect } from 'react-router-dom';
import web from '../src/images/web1.jpg'
import Common from './Common';

const About=()=>{
  return(
    <>
   <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact Now'/>
    </>
  );
};
export default About;


