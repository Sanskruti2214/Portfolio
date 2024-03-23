import React from 'react';
import photo from '../images/photo.jpeg';
import './NavbarStyle.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import { useState} from 'react';

export default function Navbar() {
  // let [showHome, HideHome] = useState(true)
  // const effect = () => {
  //   HideHome(!showHome);
  // };
  return (
    <>
      <div className="navbar">
        <div className="nav-self">
          <img className="nav-img" src={photo} alt="photo" />
          <div className="nav-name">
            <span>Sanskruti Bhise</span>
            Software Engineer
          </div>
        </div>
        <div className="nav-menu">
          <ul className="nav-menu-list">
            {MenuItems.map((items, index) => {
              return (
                <li key={index} >
                  <Link className={items.cName} to={items.url}>
                    <i className={items.icon}></i>
                    {items.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
