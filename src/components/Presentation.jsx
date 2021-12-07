import React from "react"
import play from '../icons/play.png'

function Presentation(props){
  return(
  <section>
    <div className="absolute-pos">
      <h1>Eduardo Olmedo</h1>
      <p>Frontend Developer</p>
    </div>
    <div className="absolute-pos-arrow">
      <a href="#biography" title="View Projects"><img alt="play-icon" src={play}></img></a>
    </div>
  </section>
  )
}


export {Presentation}