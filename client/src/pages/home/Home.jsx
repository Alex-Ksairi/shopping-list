import React from 'react'

import Hero from '../../components/hero/Hero';
import Banner from '../../components/banner/Banner';

export default function Home() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Hero>
                <Banner>
                    <h1>welcome to shoppingList24</h1>
                    <div></div>
                    <p>Now get started to list your items</p>
                    <a href="/shopping-list"><button className="btn">My list</button></a>
                </Banner>
            </Hero>
        </div>
    )
}
