import "./about.css";
import AboutImg from "../../assets/dev.png";
import CV from "../../assets/IshikaBaid_FrontendDeveloper.pdf";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>

            <div className="about-container container grid">
                <img src={AboutImg} alt="" className="about-img" />

                <div className="about-data">

                    <p className="about-description">
                        - I'm a frontend developer graduated in 2022 from GGSIPU, Delhi.<br />
                        - I've done B.tech in Electronics and Communication.<br />
                        - I'm also an open source contributor, building features for an open source dev community called Real Dev Squad.
                    </p>

                    <a download="" href={CV} className="button button--flex" id="about-btn">
                        Download CV<i class="uil uil-file-alt file-icon"></i>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default About;