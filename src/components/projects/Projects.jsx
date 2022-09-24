import "./projects.css";

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section-title">Projects</h2>

            <div className="projects-container container grid">
                <div className="projects-content">
                    <div>
                        <h3 className="projects-title">TravelBee</h3>
                    </div>
                    <span className="projects-button">View More
                        <i className="uil uil-arrow-right projects-button-icon"></i>
                    </span>

                    <div className="projects-modal">
                        <div className="projects-modal-content">
                            <i className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">TravelBee</h3>
                            <p className="projects-modal-description">
                                Check out my projects made using various tools and frameworks majorly using React.js
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        Restaurant Website where people can order their favourite food
                                        and features include auth via Cookies, role Based UI and Controls, mobile Responsiveness.
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
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
                    <span className="projects-button">View More
                        <i className="uil uil-arrow-right projects-button-icon"></i></span>

                    <div className="projects-modal">
                        <div className="projects-modal-content">
                            <i className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">8AM</h3>
                            <p className="projects-modal-description">
                                Check out my projects made using various tools and frameworks majorly using React.js
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        Restaurant Website where people can order their favourite food
                                        and features include auth via Cookies, role Based UI and Controls, mobile Responsiveness.
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
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
                    <span className="projects-button">View More
                        <i className="uil uil-arrow-right projects-button-icon"></i></span>

                    <div className="projects-modal">
                        <div className="projects-modal-content">
                            <i className="uil uil-times projects-modal-close"></i>

                            <h3 className="projects-modal-title">Movie Time</h3>
                            <p className="projects-modal-description">
                                Check out my projects made using various tools and frameworks majorly using React.js
                            </p>

                            <ul className="projects-modal-projects grid">
                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                        Restaurant Website where people can order their favourite food
                                        and features include auth via Cookies, role Based UI and Controls, mobile Responsiveness.
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
                                    </p>
                                </li>

                                <li className="projects-modal-project">
                                    <p className="projects-modal-info">
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