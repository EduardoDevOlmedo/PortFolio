import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAtlas, faTasks, faIdBadge} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    

    return(
       <div className="nav-container">
        <div className="navbar">
            <a href="#biography"><FontAwesomeIcon icon={faAtlas} /></a>
            <a href="#projects"><FontAwesomeIcon icon={faTasks} /></a>
            <a href="#contact"><FontAwesomeIcon icon={faIdBadge} /></a>
        </div>
       </div>
    )
}


export {Navbar}