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
    <div id="socialLink"><i style={{fontSize:"24px", color: "rgb(54, 69, 79)", marginRight: "5px"}} class="fa fa-instagram"></i> <a href="https://www.instagram.com/gaspar_rosielstone/">@gaspar_rosielstone</a></div>
    </div>
    </div>
  )
}

export default LearnMore