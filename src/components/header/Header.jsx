import { useState } from "react";
import "./header.css";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Portfolio</a>

                <div className={toggleMenu ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">
                                <i className="uil uil-estate nav-icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">
                                <i className="uil uil-user nav-icon"></i>
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className="nav-link">
                                <i className="uil uil-file-alt nav-icon"></i>
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects" className="nav-link">
                                <i className="uil uil-desktop nav-icon"></i>
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#blog" className="nav-link">
                                <i className="uil uil-book-open nav-icon"></i>
                                Blogs
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                <i className="uil uil-message nav-icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav-close" 
                       onClick={() => setToggleMenu(!toggleMenu)}>
                    </i>
                </div>

                <div className="nav-toggle" onClick={() => setToggleMenu(!toggleMenu)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;