import React from "react";
import Title from "./Title";
import { useState, useLayoutEffect, useEffect} from "react";
import Aos from "aos"
import "aos/dist/aos.css"
 
function Bio() {

    const abilities = [ "SASS", "NODE", "JS", "React", "MongoDB", "CSS", "Express"]

    const [data, setData] = useState("HTML");
    let count = 0;

    useEffect(() => {
        Aos.init({duration: 400})
    }, [abilities])


    useLayoutEffect(() => {
        const interval = setInterval(() => {
          if(count < abilities.length){
            setData(abilities[count++])
          }
          else {
              count = 0;
          }
        }, 2000);
        return () => clearInterval(interval);
     }, []);


  return(
    <div data-aos="fade-up" id="biography" >
        <Title title="Bio"/>
        <h3>Hi! I'm Eduardo Olmedo, a <b>Frontend Developer</b></h3>
        <p>I have worked with: </p>
        <div className="contains-data">
                <b className="data-eff">{data}</b>
        </div>
        <p className="description"> I'm a super passionate, 18 year-old Junior Frontend Developer who's willing to learn the most from others, and learning by myself. Since December, 2020 I'
        ve been studying by myself. I'm a highly responsible person who is able to easily understand and practice the things that I adquire.</p>
    </div>
  )
}


export {Bio}