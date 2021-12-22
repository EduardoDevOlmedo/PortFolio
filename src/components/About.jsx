import React, {useEffect, useState} from "react";
import Title from "./Title";
import fast from "../icons/fast.svg"
import api from "../icons/APIs.svg"
import DYNAMIC from "../icons/dynamic.svg"
import LEARNER from "../icons/responsive.svg"
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
    
    const data = {
        responsive: "My sites are completely responsive, I've got nice experience designing full responsive websites which can sometimes be a bit difficult to adapt to a mobile device.",
        API: " I've used some APIS in order to complete certain goals, I have experienced using Postman, Mailchimp and other tools, including fetch and axios.",
        DYNAMIC: " I love thinking on other and original ideas that may get better results than expected, being dynamic is super important when programming fullweb aplications with a certain purpose.",
        LEARNER: "Learning is something that I always liked to do. That's not a problem for me, I dedicate the needed hours in order to understand the varieties of tecnologies that the client needs."
    }
    

    function ReadMore({children}){
        
        const text = children;
        const [actualText, setActualText] = useState(true)
        const resultString = actualText ? text.slice(0, 100) : text        
        function handleClick(){
            setActualText(!actualText)
        }
        return (
            <div>
                {resultString}
                <div style={{cursor: "pointer"}} onClick={handleClick}>{actualText ? "...Read More" : "Read Less"}</div>
            </div>
        )
    }


    useEffect(() => {
        Aos.init({duration: 250})
      }, [])  
    
    return(
       <div className="about">
            <Title title="About"/>
            <div className="main-ABOUT-container">
                <div className="info-container" data-Aos="fade-up-right">
                   <div className="data-contains">
                      <div className="icon-cont"><img alt="responsive-design" src={LEARNER}></img></div>
                      <h3>RESPONSIVE</h3>
                   </div>
                    <div className="explanation">
                    <ReadMore>
                        {data.responsive}
                    </ReadMore>
                    </div>
                </div>
                <div className="info-container" data-aos="fade-up-right">
                <div className="data-contains">
                      <div className="icon-cont"><img alt="api use" src={api}></img></div>
                      <h3>API USE</h3>
                 </div>
                    <div className="explanation">
                    <ReadMore>
                        {data.API}
                    </ReadMore>
                    </div>
                </div>
                <div className="info-container" data-aos="fade-up-left">
                <div className="data-contains">
                      <div className="icon-cont"><img alt="dynamic" src={DYNAMIC}></img></div>
                      <h3>DYNAMIC</h3>
                </div>
                    <div className="explanation">
                    <ReadMore>
                        {data.DYNAMIC}
                    </ReadMore>
                    </div>
                </div>
                <div className="info-container" data-aos="fade-up-left">
                   <div className="data-contains">
                      <div className="icon-cont"><img alt="learner" src={fast}></img></div>
                      <h3>LEARNER</h3>
                   </div>
                    <div className="explanation">
                    <ReadMore>
                        {data.LEARNER}
                    </ReadMore>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default About