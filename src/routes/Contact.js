import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import './Contact.css'
// import leetcodeimg from '../images/leetcodeimg.png'
// import Hackerrank from '../images/Hackerrank.png'
// import codingninjasimg from '../images/codingninjasimg.avif'
export default function Contact(props) {
  return (
    <>
      <Navbar />
      <Hero Name={props.Name} />
      <div className="About-contact">
        <div className="contact"><i class="fa-solid fa-earth-americas"></i>
          <span>Country</span>
          <p className='text'>India</p>
        </div>
        <div className="contact"><i class="fa-solid fa-location-dot"></i>
          <span>Address</span>
          <p className='text'>Pune, Maharashtra</p>
        </div>
        <div className="contact"><i className="fa-solid fa-phone"></i>
          <span>Phone</span>
          <p className='text'>+91 9975458500</p>
        </div>
      </div>
      
      <div className='details'>
        <span className='block1'>Social Media Account</span>
        <div className="contact-logo">
          <div className="contact1"><a href="mailto:sanskrutibhise03@gmail.com" target="_blank"><i class="fa-solid fa-envelope" ></i>Email</a></div>
          <div className="contact1"><a href="https://www.linkedin.com/in/sanskruti-bhise-6384b0253/" target="_blank"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></div>
          <div className="contact1"><a href="https://github.com/Sanskruti2214" target="_blank"><i className="fa-brands fa-github"></i>Github</a></div>
          <div className="contact1"><a href="https://www.kaggle.com/sanskrutibhise03/competitions?tab=active" target="_blank"><i class="fa-brands fa-kaggle" target="_blank"></i>Kaggle</a></div>
        </div>

        <div className="moveanimation">Let's Connect</div>
        
      </div>
    </>
  )
}
