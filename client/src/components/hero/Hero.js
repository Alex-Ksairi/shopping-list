import './Hero.css';

export default function Hero({ children, hero }) {
    return (
        <header className={hero}>
            <img className="img" src="../../images/note-2527458_1920.jpeg" alt="hero" />
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
};