import React from "react";
import Title from "./Title";

const About = (props) => {
    return(
       <div className="about">
            <Title title="About" className="mMargin"/>
            <div className="main-ABOUT-container">
                <div className="info-container">
                    <div className="icon-cont">IMAGEN</div>
                    <div className="explanation">Explicacion</div>
                </div>
                <div>COSA 1</div>
                <div>COSA 1</div>
                <div>COSA 1</div>
            </div>
       </div>
    )
}

export default About