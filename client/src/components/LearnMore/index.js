import React from "react"
import PopUp from "../PopUp"
import "./style.css"

const LearnMore = () => {
  return (
    <div id="learnMore">
    <div id="headTitle">
    <h1>SOLO EXHIBITION OF GASPAR ROSIELSTONE, PLANNED FOR 2021.</h1>
    </div>
    <PopUp/>
    {/* <button id="contactMe">
    Keep in Touch
    </button> */}
    <div id="seeInfo">
    <h3>NEWS AND UPDATED WEBSITE COMING SOON.</h3>
    <p>Instagram: <a href="https://www.instagram.com/gaspar_rosielstone/">@gaspar_rosielstone</a></p>
    </div>
    </div>
  )
}

export default LearnMore