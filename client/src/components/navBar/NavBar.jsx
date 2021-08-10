// importing React
import React from "react";

// importing Link
import { Link } from "react-router-dom";

// importing NavBar scss
import './NavBar.css';

export default function NavBar() {
    // // collapse the menu bar by using useState
    let [isOpen, setIsOpen] = React.useState(true);

    // scrollToTop
    let scrollToTop = () => {
        return window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <React.Fragment>
            <nav className="nav" id={isOpen ? '' : 'radius'}>
                <div className="nav-opened-container nav-closed-container">
                    <Link to="/" className="nav-logo" onClick={scrollToTop}>
                        <div className="own-logo">
                            <div className="logo-name"> <div className="first-name">alexander</div> <span className="span-last-name">ksairi</span> </div>
                        </div>
                    </Link>
                    <div className="navigation" id={isOpen ? "hidden" : ""} onClick={() => setIsOpen(!isOpen)}> 
                        <div className="links">
                            <Link to="/" onClick={scrollToTop}>home</Link>
                        </div>
                        <div className="links">                           
                            <Link to="/shopping-list">My list</Link>
                        </div>
                    </div>
                    
                    <div className="nav-close" id={isOpen ? "hidden" : ""} onClick={() => setIsOpen(!isOpen)}>x</div>
                    <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)} id={isOpen ? "" : "hidden"}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

