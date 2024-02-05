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
                        I'm a dedicated third-year Computer Engineering student at Vishwakarma Institute of Information Technology, where I've consistently achieved a high academic standing with a notable CGPA of 9.48. My proficiency spans essential programming languages such as Java, JavaScript, and Python, complemented by a solid understanding of the ReactJS framework for web development. I've successfully applied this knowledge to various projects, showcasing adaptability, innovative problem-solving, and a commitment to delivering comprehensive solutions.
                    </p>
                    <p>
                        My true passion lies in the exciting intersection of artificial intelligence and machine learning. Eager to explore this dynamic realm, I'm actively seeking opportunities to contribute to AI/ML projects. I find the prospect of leveraging technology to solve complex problems both intellectually stimulating and incredibly rewarding. As I look ahead, I'm enthusiastic about channeling my skills and experience into making a meaningful impact in the tech industry, particularly within the evolving landscape of AI/ML and software development.
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
                        <i className="fa-solid fa-chalkboard-user"></i>AI/ML 
                    </div>
                </div>
            </div>
        </>
    )
}
