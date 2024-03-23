import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import './AboutStyle.css'
export default function About(props) {
    return (
        <>
            <Navbar />
            <Hero Name={props.Name} />
            <div className="About-me">
                <div className="me">
                    <p>
                    I am a dedicated third-year Computer Science student at BRACT's Vishwakarma Institute of Information Technology, I boast a strong academic record, achieving a second-year CGPA of 9.48. 
                    </p>
                    <p>
                    My interests revolve around cutting-edge technologies such as AI/ML, web development, and Data Structures and Algorithms (DSA). I am deeply engaged in Data Structures and Algorithms (DSA), actively tackling and solving related problems as part of my ongoing learning and exploration. With a hunger for knowledge and a passion for innovation, I am eager to collaborate on impactful projects and contribute to the advancement of technology. Rooted in a solid understanding of computer science fundamentals, I am committed to continuous learning and growth in this dynamic field, actively seeking opportunities to contribute and expand my skills.
                    </p>
                </div>
                <span className='done'>What I am doing ?</span>
                <div className="doing">
                    <div className="class1">
                        <i className="fa-solid fa-book"></i>Data Structure & Algorithms
                    </div>
                    <div className="class1">
                        <i className="fa-regular fa-file-code "></i>Web Development
                    </div>
                    <div className="class1">
                        <i className="fa-solid fa-chalkboard-user"></i>Artificial Intelligence/Machine Learning 
                    </div>
                </div>
            </div>
        </>
    )
}
