import React, {useEffect, useState, useCallback} from "react";
import Title from "./Title";
import {makeStyles} from "@material-ui/core"
import Aos from "aos"
import "aos/dist/aos.css"
import imagenEccomerce from "../assets/imagenEccomerce.jpg" 

const useStyles = makeStyles((theme)=>({
    modal:{
        position: "absolute",
        background: "#303030",
        boxShadow: theme.shadows[5],
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        borderRadius: 30,
        width: 500,
        maxWidth: "90%",
        transition: "ease-in"
    }
}))

function Projects(){
    
    const styles = useStyles()
    const [isClicked, setIsClicked] = useState(false)
    const [isClickedOne, setIsClickedOne] = useState(false)
    const [isClickedTwo, setIsClickedTwo] = useState(false)
    const [isEsc, setIsEsc] = useState(false)

    const escFunction = useCallback((event) => {
      if (event.keyCode === 27) {
        setIsClicked(false)
        setIsClickedOne(false)
        setIsClickedTwo(false)
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener("keydown", escFunction);
      
      return () => {
        document.removeEventListener("keydown", escFunction);
        setIsEsc(false)
      };
    }, [escFunction]);

    const titles = ['Weather Project', 'Quotes Project', 'E-Commerce']
    const infor = ['This was a really nice project, using Weather API, POSTMAN, and some react hooks. I think the most difficult part of this one, was including a nice UX/UI experience, something than can be sometimes problematic', 
    'I really liked making the design of this project, using react and SASS. I also used Postman. I think fetching is super important for every single react, and frontend developer', 
    'This was the first project that I made. Since I was starting, I just used the basics. I used pure JS for this. Even though I was super newbie, I managed to do a great job.'
    ]
    const imgURL = ['https://media.nationalgeographic.org/assets/photos/000/263/26383.jpg', 'https://cdn.lifehack.org/wp-content/uploads/2015/01/most-inspirational-quotes.jpeg', imagenEccomerce ]
    const projectURLS = [ 
        "https://peaceful-bell-f4706e.netlify.app/",
        "https://nifty-sammet-03df98.netlify.app/",
        "https://eduardodevolmedo.github.io/Your-Destiny/venta.html"
    ]


    function Modal(props){
        return(
          <div className="modal-cont" id="main">
              <div className={styles.modal}>
                  <img alt="project-desc" src={props.img}></img>
                  <span className="close-modal" onClick={props.function}>X</span>
                  <div className="project-descr">
                  <h5>{props.title}</h5>
                  <p>{props.text}</p>
                  <div className="modal-tecs">
                    <div >
                        <a rel="noopener noreferrer" target="_blank" href={props.link}>GoTo Project</a>
                    </div>
                    <div className="icons">
                    <span className={`icon ${props.icons[0]}`}></span>
                    <span className={`icon ${props.icons[1]}`}></span>
                    <span className={`icon ${props.icons[2]}`}></span>
                    <span className={`icon ${props.icons[3]}`}></span>
                    <span className={`icon ${props.icons[4]}`}></span>

                    </div>
                  </div>
                  </div>
              </div>
          </div>
       )
    }


    function handleClick(){
        setIsClicked(!isClicked)
    }

    function handleClickOne(){
        setIsClickedOne(!isClickedOne)
    }

    function handleClickTwo(){
        setIsClickedTwo(!isClickedTwo)
    }

    useEffect(() => {
        Aos.init({duration: 400})
    }, [])
    
    
    return(
        <section id="projects" style={{padding: isClicked || isClickedOne || isClickedTwo  ? "0px" : "3% 7%"}}>
        {isClicked ? <Modal title={titles[0]} img={imgURL[0]}  text={infor[0]} icons={["sass", "react", "postman", "js", "css"]} link={projectURLS[0]} function={handleClick}
        /> : null}
        {isClickedOne ? <Modal  title={titles[1]} img={imgURL[1]}  text={infor[1]} icons={["sass", "react", "postman", "js", "html"]} link={projectURLS[1]}
        function={handleClickOne}
         /> : null}
        {isClickedTwo ? <Modal  title={titles[2]} img={imgURL[2]}  text={infor[2]} icons={["sass", "html", "js", "css"]} link={projectURLS[2]}
            function={handleClickTwo}
        /> : null}
            <Title title="Projects"></Title>
            <div className="projects-title-cont">
            <h2>These are some projects I've worked on, all of them
                are completely done by myself, including design and usage.
            </h2>
            </div>
            <div className="box-container" style={{filter: isClicked || isClickedOne || isClickedTwo ? "blur(8px)" : "initial"}}>
            <div className="box" data-aos="fade-up">
                <img alt="first-project" src={imgURL[0]}></img>
                <div className="project-desc">
                    <h5>{titles[0]}</h5>
                    <p>{infor[0].substring(0,100)}...</p>
                <div className="project-tecs">
                    <a href="#main" onClick={handleClick}>See More</a>
                    <span className="icon react"></span>
                    <span className="icon sass"></span>
                    <span className="icon js"></span>
                    <span className="icon postman"></span>
                </div>
                </div>
            </div>
            <div className="box" data-aos="fade-up">
                <img alt="second-project"  src={imgURL[1]}></img>
                <div className="project-desc">
                <h5>{titles[1]}</h5>
                    <p>{infor[1].substring(0,100)}...</p>
                    <div className="project-tecs">
                    <a  href="#main" onClick={handleClickOne}>See More</a>
                    <span className="icon react"></span>
                    <span className="icon sass"></span>
                    <span className="icon js"></span>
                    <span className="icon postman"></span>
                </div>
                </div>
            </div>
            <div className="box" data-aos="fade-up">
                <img alt="third-project" src={imgURL[2]}></img>
                <div className="project-desc">
                    <h5>{titles[2]}</h5>
                    <p>{infor[2].substring(0,100)}...</p>
                    <div className="project-tecs">
                    <a href="#main" onClick={handleClickTwo} >See More</a>
                    <span className="icon sass"></span>
                    <span className="icon css"></span>
                    <span className="icon js"></span>
                    <span className="icon html"></span>
                </div>
                </div>                
            </div>
            </div>
        </section>
    )
}




export default Projects