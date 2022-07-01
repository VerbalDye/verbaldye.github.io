import coverImage from '../../assets/cover/cover_image.jpg'
import Hero from '../Hero';

function Nav({ heroOpen, setHeroOpen }) {

    return (
        <div className={heroOpen && 'hero-open'}>
            <header style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${coverImage})` }}>
                <nav>
                    <ul className="flex-row space-around width-100 py-2 my-0">
                        <li className="mx-1">
                            <a href="#about-me">About</a>
                        </li>
                        <li className="mx-1">
                            <a href="#my-work">Projects</a>
                        </li>
                        <li className="mx-1">
                            <a href="#contact">Contact</a>
                        </li>
                        <li className="mx-1">
                            <a rel="noreferrer" href="https://docs.google.com/document/d/1U3h60zQ-hPWhbF7PX8xLOMQdHFGeD9mP4pnZHzQk9kU/edit?usp=sharing"
                                target="_blank">Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
            {heroOpen && <Hero setHeroOpen={setHeroOpen} />}
        </div>
    )
};

export default Nav;