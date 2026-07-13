import "../styles/hero.css";

export default function Hero(){
    return (
        <header className="hero" id="home">
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>
                    Our Towns are <span>NOT</span> Designed for Us
                </h1>
                <p>How Americans Are Driving Themselves To Ruin</p>

                <div className="hero-buttons">
                    <button>Get Active</button>
                    <button className="outline">Learn More</button>
                </div>
            </div>
        </header>
    )
}