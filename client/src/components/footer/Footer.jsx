import React from 'react';

import './Footer.css';

export default function Footer() {
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
            <footer className="footer">
                <div className="copyright">
                    <p>all rights ©️ 2020 - 2021</p>
                    <span><a href="..">AGB</a></span>
                    <span><a href="..">Impressum</a></span>
                </div>
                <div className="go-top" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </footer>
        </React.Fragment>
    )
}
