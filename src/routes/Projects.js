import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import './Projects.css'

import CovidDetection from '../images/CovidDetection.jpg'
import sudoku from '../images/sudoku.jpg'
import digitR from '../images/digitR.png'
export default function Projects(props) {
  return (
    <>
      <Navbar />
      <Hero Name={props.Name} />
      <div className='projects'>
        <div className='P1 pbox'>
        <img src={sudoku} alt=''/>
        <h3>Sudoku Solver (React.js Website)</h3>
        </div>
        <div className='P2 pbox'>
        <img src={digitR} alt=''/>
        <h3>Digit Recognition (ML Model)</h3>
        </div>
        {/* <div className='P3 pbox'>
        <img src={CovidDetection} alt=''/>
        <h3>HR Constultancy (Currently Working)</h3>
        </div> */}
        <div className='P4 pbox'>
        <img src={CovidDetection} alt=''/>
        <h3>Covid Detection (Currently Working)</h3>
        </div>
      </div>

      
    </>
  );
}
