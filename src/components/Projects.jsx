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
                    <div className="project-image"></div>
                    <div className="project-description">
                        <h5>Weeather</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a porttitor risus. Praesent metus dolor, consectetur id purus vel, euismod rutrum lorem. </p>
                        <div className="project-tecnologies">
                        <div><a>See Project</a></div>
                        <div>Tecs</div>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="project-image"></div>
                    <div className="project-description">
                        <h5>Weeather</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a porttitor risus. Praesent metus dolor, consectetur id purus vel, euismod rutrum lorem. </p>
                        <div className="project-tecnologies">
                        <div><a>See Project</a></div>
                        <div>Tecs</div>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div className="project-image"></div>
                    <div className="project-description">
                        <h5>Weeather</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a porttitor risus. Praesent metus dolor, consectetur id purus vel, euismod rutrum lorem. </p>
                        <div className="project-tecnologies">
                        <div><a>See Project</a></div>
                        <div>Tecs</div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects