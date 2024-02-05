import React from 'react'
import './HeroStyle.css'
export default function Hero(props) {
  return (
    <div className="Hero">
      <h1>{props.Name}</h1>
      <div className="underline"></div>
    </div>
  )
}
