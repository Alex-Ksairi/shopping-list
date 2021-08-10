import React from 'react';

import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';

export default function ErrorPage() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <div>
            <Hero>
                <Banner>
                    <h1>OOPS || 404</h1>
                    <div></div>
                    <p>The page you are looking for might be removed or had its name changed or temporarily unavailable</p>
                    <a href="/home"><button className="btn">Return home</button></a>
                </Banner>
            </Hero>
        </div>
    )
}
