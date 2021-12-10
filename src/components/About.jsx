import React, {useEffect, useState} from "react";
import Title from "./Title";
import fast from "../icons/fast.svg"
import api from "../icons/APIs.svg"
import DYNAMIC from "../icons/dynamic.svg"
import LEARNER from "../icons/responsive.svg"
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
    
    const [actualText, setActualText] = useState(true)

    const data = {
        responsive: "My sites are completely responsive, I've got nice experience designing full responsive websites which can sometimes be a bit difficult to adapt to a mobile device.",
        API: " I've used some APIS in order to do some object, I have experienced using Postman, Mailchimp and other tools, including fetch and axios.",
        DYNAMIC: " I love thinking on other and original ideas that may get better results than expected, being dynamic is super important when programming fullweb aplications with a certain purpose.",
        LEARNER: "Learning is something that I always liked to do. That's not a problem for me, I dedicate the needed hours in order to understand the varieties of tecnologies that the client needs."
    }
    
    function handleClick(){
        setActualText(!actualText)
    }


    useEffect(() => {
        Aos.init({duration: 250})
      }, [])  
    
    return(
       <div className="about">
            <Title title="About"/>
            <div className="main-ABOUT-container">
                <div className="info-container" data-Aos="fade-up-right">
                    <div className="icon-cont"><img src={fast}></img></div>
                    <h3>FAST LEARNER</h3>
                    <div className="explanation">
                    {actualText ? data.LEARNER.substring(0,150) : data.LEARNER}
                    {actualText === true ? <a onClick={handleClick}>...Show More</a> : <a onClick={handleClick}>...Show less</a>}
                    </div>
                </div>
                <div className="info-container" data-aos="fade-up-right">
                    <div className="icon-cont"><img src={api}></img></div>
                    <h3>API USE</h3>
                    <div className="explanation">
                    {actualText ? data.API.substring(0,150) : data.API}
                    {actualText === true ? <a onClick={handleClick}>...Show More</a> : <a onClick={handleClick}>...Show less</a>}
                    </div>
                </div>
                <div className="info-container" data-aos="fade-up-left">
                    <div className="icon-cont"><img src={DYNAMIC}></img></div>
                    <h3>DYNAMIC</h3>
                    <div className="explanation">
                    {actualText ? data.DYNAMIC.substring(0,150) : data.DYNAMIC}
                    {actualText === true ? <a onClick={handleClick}>...Show More</a> : <a onClick={handleClick}>...Show less</a>}
                    </div>
                </div>
                <div className="info-container" data-aos="fade-up-left">
                    <div className="icon-cont"><img src={LEARNER}></img></div>
                    <h3>RESPONSIVE</h3>
                    <div className="explanation">
                    {actualText ? data.responsive.substring(0,150) : data.responsive}
                    {actualText === true ? <a onClick={handleClick}>...Show More</a> : <a onClick={handleClick}>...Show less</a>}
                    </div>
                </div>
            </div>
       </div>
    )
}

export default About