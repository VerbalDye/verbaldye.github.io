function Hero({ setCurrentPage }) {

    return (
        <div className='hero'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"></link>
            <div className="hero-content">
                <div>
                    <p>I'm a Fullstack Web Developer. <br></br> I Make Effective, Polished, and Functional Systems.</p>
                    <button className="btn" onClick={() => setCurrentPage('about')}>View My Work <i className="bi bi-arrow-down"></i></button>
                </div>
            </div>
            <div id="name-hero">
                <h1>Dustin Huntsberger</h1>
            </div>
            {/* <div id="name-hero">
                <h1>Dustin Huntsberger</h1>
            </div> */}
        </div>
    )
}

export default Hero;