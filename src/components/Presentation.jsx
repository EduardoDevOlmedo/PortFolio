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
    <a href="#biography" className="absolute-pos-arrow">
      <div title="View Projects" href="null">View my work</div>
      <span><FontAwesomeIcon style={{verticalAlign: "middle"}} icon={faArrowRight}></FontAwesomeIcon></span>
    </a>
  </section>
  )
}


export {Presentation}