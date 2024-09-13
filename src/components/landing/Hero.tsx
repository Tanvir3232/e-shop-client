import './HeroStyle.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="overlay">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to eShop </h1>
                    <p className="hero-subtitle">Committed to Excellence</p>
                    <button className="hero-btn">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
