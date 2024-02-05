import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import './HighLights.css'


export default function Resume(props) {
    return (
        <>
            <Navbar />
            <Hero Name={props.Name} />
            <div className="About-resume">
                <div className="highlight">
                    <h2>Online Platform Performance</h2>
                    <ul>
                        <li className="lights">LeetCode<a href='https://leetcode.com/sanskrutibhise03/' target="_blank">(status)</a></li>
                        <li className="lights1">Coding Ninjas<a href="https://www.codingninjas.com/studio/profile/c10f5570-df70-4400-936a-fb0878ba0c1a" target="_blank">(status)</a></li>
                        <li className="lights">Hackerrank<a href="https://www.hackerrank.com/profile/sanskrutibhise03" target="_blank">(status)</a></li>
                        <li className="lights1" >GFG<a href="https://auth.geeksforgeeks.org/user/sanskrutifg47/practice" target="_blank">(status)</a></li>
                        <li className="lights">Kaggle<a href="https://www.kaggle.com/sanskrutibhise03/competitions?tab=active" target="_blank">(Competition Rank)</a></li>
                    </ul>
                </div>
                <div className="highlight">
                    <h2>Associate Publicity Head At VIIT Alumni Association Pune</h2>
                    <ul>
                        <li className="lights"><a>Experience of Publicity</a></li>
                        <li className="lights1"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7116050112803475456/" target="_blank">Experience of Event Anchor</a></li>
                        <li className="lights"><a href="https://drive.google.com/file/d/1Fi14v2niEuwq6xVIqeRw6D_eL0u_DK4b/view?usp=sharing" target="_blank">Part of Panel Discussion</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
// style={{ cursor: 'pointer' }}   onClick={openResume}
