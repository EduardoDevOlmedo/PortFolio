import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"


function Presentation(){
  return(
  <section>
    <div className="absolute-pos">
      <h1>Eduardo Olmedo</h1>
      <p>Frontend Developer</p>
    </div>
    <div className="absolute-pos-arrow">
      <a href="#biography" title="View Projects">View my work</a>
      <span><FontAwesomeIcon style={{verticalAlign: "middle"}} icon={faArrowRight}></FontAwesomeIcon></span>
    </div>
  </section>
  )
}


export {Presentation}