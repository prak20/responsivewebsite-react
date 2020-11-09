import React from 'react';
// import { Redirect } from 'react-router-dom';
import web from '../src/images/web.jpg'
import Common from './Common';

const Home=()=>{
  return(
    <>
    <Common name='Responsive Website By' imgsrc={web} visit='/service' btname='Get Started'/>
    </>
  );
};
export default Home;


