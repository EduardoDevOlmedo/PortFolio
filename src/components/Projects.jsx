import React from "react";
import Title from "./Title";

function Projects(){
    return(
        <section id="projects">
            <Title title="Projects"></Title>
            <div className="projects-title-cont">
            <h2>These are some projects I've worked on, all of them
                are completely done by myself, including desing and usage.
            </h2>
            </div>
            <div className="box-container">
            <div className="box">
                <img src="https://media.nationalgeographic.org/assets/photos/000/263/26383.jpg"></img>
                <div className="project-desc">
                    <h5>Weather Project</h5>
                    <p>This was a really nice project, using Weather API, POSTMAN, and some react hooks.</p>
                    <div className="project-tecs">
                    <a target="_blank" href="https://peaceful-bell-f4706e.netlify.app/">Go To Project</a>
                    <span className="icon react"></span>
                    <span className="icon sass"></span>
                    <span className="icon js"></span>
                    <span className="icon postman"></span>
                </div>
                </div>
            </div>
            <div className="box">
                <img src="https://cdn.lifehack.org/wp-content/uploads/2015/01/most-inspirational-quotes.jpeg"></img>
                <div className="project-desc">
                <h5>Quotes Project</h5>
                    <p>I really liked making the design of this project, using react and SASS. I also used Postman.</p>
                    <div className="project-tecs">
                    <a target="_blank" href="https://nifty-sammet-03df98.netlify.app/">Go To Project</a>
                    <span className="icon react"></span>
                    <span className="icon sass"></span>
                    <span className="icon js"></span>
                    <span className="icon postman"></span>
                </div>
                </div>
            </div>
            <div className="box">
                <img src="https://destinonegocio.com/wp-content/uploads/2016/05/e.commerce1-1030x578.jpg"></img>
                <div className="project-desc">
                    <h5>Eccomerce</h5>
                    <p>This was the first project that I made. Since I was starting, I just used the basics. I used pure JS for this.</p>
                    <div className="project-tecs">
                    <a target="_blank" href="https://eduardodevolmedo.github.io/Your-Destiny/venta.html">Go to Project</a>
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