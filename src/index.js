import React   from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import ParticleComponent from "./ParticleComponent";
import { Presentation } from "./components/Presentation";
import { Bio } from "./components/Bio";
import { Navbar } from "./components/Nav";
import About from "./components/About";
import { useState, useMemo, useEffect, useRef } from "react";
import '../src/style.css';
import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  
//INTERSECTION OBSERVER FOR NAV

     const targetRef = useRef(null)
      const [visibility, setVisibility] = useState(false)
     
     const callbackIntersection = entries => {
         const [entry] = entries;
         if(entry.isIntersecting){
          setTimeout(() => {
            setVisibility(true)
          }, 250);
        }
        else {
          setTimeout(() => {
            setVisibility(false)
          }, 0);
        }
     }     

     const options = useMemo(() => {
         return {
             root: null,
             rootMargin: '0px',
             threshold: 0.1
         }
     }, [])
 
     useEffect(() => {
         const observer = new IntersectionObserver(callbackIntersection, options)
         const currentTarget = targetRef.current;
         if(currentTarget) observer.observe(currentTarget)
 
         return() => {
             if(currentTarget) observer.unobserve(currentTarget)
         }
     }, [targetRef, options])

//USE EFFECT FOR NAV ANIMATIONS


    useEffect(() => {
      Aos.init({duration: 300})
    }, [])

  return (
    <Router>
      <div>
        <ParticleComponent />
        <Presentation />
      </div>
      <main ref={targetRef}>
        <Bio />
        {visibility ? <Navbar data-aos="fade-up"/> : null}
        <About data-aos="fade-up" />
      </main>        
    </Router>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
