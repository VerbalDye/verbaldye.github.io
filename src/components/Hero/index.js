import coverImage from '../../assets/cover/cover_image.jpg'

function Hero({ setHeroOpen }) {

    return (
        <div className='hero' style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${coverImage})` }}>
            <div className="hero-content">
                <div>
                    <p>I'm a Fullstack Web Developer. <br></br> I Make Effective, Polished, and Functional Systems.</p>
                    <a href="#about-me" className="button" onClick={() => setHeroOpen(false)}>View My Work <i className="bi bi-arrow-down"></i></a>
                </div>
            </div>
            {/* <div id="name-hero">
                <h1>Dustin Huntsberger</h1>
            </div> */}
        </div>
    )
}

export default Hero;