import { useState } from "react";
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggle = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id="projects">
            <h2 className="section-title">Projects</h2>

            <div className="projects-container container grid">
                <div className="projects-content">
                    <div>
                        <h3 className="projects-title">TravelBee</h3>
                    </div>
                    <span className="projects-button" onClick={() => toggle(1)}>View More
                        <i className="uil uil-arrow-right projects-button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "projects-modal active-modal" : "projects-modal"}>
                        <div className="projects-modal-content">
                            <i onClick={() => toggle(0)} className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">TravelBee</h3>
                            <p className="projects-modal-description">
                                Travelers' website where people can add pictures, and leave comments and reviews about a travel destination they had visited.
                                Features include Image upload using Cloudinary, Cluster maps using Mapbox, and Protected routes.
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Tech Stack :</b> ejs, MongoDB, Node.js, Express.js, HTML, CSS, Bootstrap
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Demo :</b> <a className="link" href="https://secret-basin-63431.herokuapp.com/">Hosted Link</a>
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Source Code :</b> <a href="https://github.com/Ishikabaid/TravelBee" className="link">Github Repo</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects-content">
                    <div>
                        <h3 className="projects-title">8AM</h3>
                    </div>
                    <span className="projects-button" onClick={() => toggle(2)}>View More
                        <i className="uil uil-arrow-right projects-button-icon"></i></span>

                    <div className={toggleState === 2 ? "projects-modal active-modal" : "projects-modal"}>
                        <div className="projects-modal-content">
                            <i onClick={() => toggle(0)} className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">8AM</h3>
                            <p className="projects-modal-description">
                                Restaurant Website where people can order their favourite food
                                and features include auth via Cookies, role Based UI and Controls, mobile Responsiveness.
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Tech Stack :</b> React.js, MongoDB, Node.js, Express.js
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Demo :</b> <a className="link" href="https://8am.netlify.app/home">Hosted Link</a> 
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Source Code :</b> 
                                        <a href="https://github.com/Ishikabaid/8am_Frontend" className="link"> Frontend</a>
                                        <a href="https://github.com/Ishikabaid/8am_backend" className="link"> Backend</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects-content">
                    <div>
                        <h3 className="projects-title">Movie Time</h3>
                    </div>
                    <span className="projects-button" onClick={() => toggle(3)}>View More
                        <i className="uil uil-arrow-right projects-button-icon"></i></span>

                    <div className={toggleState === 3 ? "projects-modal active-modal" : "projects-modal"}>
                        <div className="projects-modal-content">
                            <i onClick={() => toggle(0)} className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">Movie Time</h3>
                            <p className="projects-modal-description">
                                Movie search app made using OMDB API where user can search their favourite movies and know about a particular movie as well.
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Tech Stack :</b> React.js, HTML, CSS
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Demo :</b> <a className="link" href="https://movie-time-ishika.netlify.app/">Hosted Link</a>
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Source Code :</b>
                                        <a href="https://github.com/Ishikabaid/Movie-time" className="link"> Github Repo</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects-content">
                    <div>
                        <h3 className="projects-title">To-Dos</h3>
                    </div>
                    <span className="projects-button" onClick={() => toggle(4)}>View More
                        <i className="uil uil-arrow-right projects-button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "projects-modal active-modal" : "projects-modal"}>
                        <div className="projects-modal-content">
                            <i onClick={() => toggle(0)} className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">To-Dos</h3>
                            <p className="projects-modal-description">
                                To-Do app where users can add tasks, edit tasks, and see tasks on the basis of active, completed, and all tasks.
                                They can also clear all the completed tasks.
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Tech Stack :</b> TypeScript, React,js, HTML, CSS
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Demo :</b>
                                        <a className="link" href="https://to-do-ishika.netlify.app">Hosted Link</a>
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        <b>Source Code :</b>
                                        <a href="https://github.com/Ishikabaid/ToDo-App" className="link"> Github Repo</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;