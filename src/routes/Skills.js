import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import './SkillsStyle.css'

export default function Skills(props) {
    return (
        <>
            <Navbar />
            <Hero Name={props.Name} />
            <div className="About-Skills">
                <div className="skill">
                    Programming Languages
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className="skill">
                    Databases, Tools and Technologies
                    <ul>
                        <li>Mysql</li>
                        <li> MongoDB</li>
                        <li>Git/GitHub</li>
                        <li>IntelliJ & Vscode</li>
                    </ul>
                </div>
                <div className="skill">
                    Frameworks and OS Systems
                    <ul>
                        <li>React.js</li>
                        <li>Windows</li>
                        <li>Linux</li>
                    </ul>
                </div>
                <div className="skill">
                    Soft Skills
                    <ul>
                        <li>Leadership</li>
                        <li>Communication Skills</li>
                        <li>Team Player</li>
                        <li>Time Management</li>
                    </ul>
                </div>
                <div>
                    
                </div>

            </div>
            

        </>
    )
}
