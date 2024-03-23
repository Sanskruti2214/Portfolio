import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import './Projects.css'
import CovidDetection from '../images/CovidDetection.jpg'
import sudoku from '../images/sudoku.jpg'
import digitR from '../images/digitR.png'
import EEG from '../images/EEG.jpg'
import FaceMask from '../images/FaceMask.jpg'
import obesitygraphic from '../images/obesitygraphic.jpg'
import Sudokuimg from '../images/Sudokuimg.png'
export default function Projects(props) {
  return (
    <>
      <Navbar />
      <Hero Name={props.Name} />
      <div className='projects'>
        {/* <a className='P1 pbox' href=''>
          <div className="project">
            <img src={EEG} alt=''/>
            <h3>Harmful Brain Activity Classification Model</h3>
          </div>
        </a> */}
        <a className='P2 pbox' href=''>
         <div className="project">
            <img src={FaceMask} alt=''/>
            <h3>Face Mask Detection Model(Currently Working)</h3>
         </div>
        </a>
        <a className='P3 pbox' href='https://github.com/Sanskruti2214/Digit_Recognition'>
          <div className="project">
            <img src={digitR} alt=''/>
            <h3>Digit Recognition Model</h3>
          </div>
        </a>
        <a className='P4 pbox' href='https://github.com/Sanskruti2214/Multi-Class-Prediction-of-Obesity-Risk'>
          <div className="project">
           <img src={obesitygraphic} alt=''/>
           <h3>Multi-Class Prediction of Obesity Risk ML Model</h3>
          </div>
        </a>
        <a className='P5 pbox' href='https://github.com/Sanskruti2214/SudokuSolver'>
          <div className="project">
           <img src={Sudokuimg } alt=''/>
           <h3>Sudoku Solver Website</h3>
          </div>
        </a>
      </div>

      
    </>
  );
}
