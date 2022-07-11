import coverImage from '../../assets/cover/cover_image.jpg';

function Nav({ setCurrentPage }) {

    return (
        <div>
            <header style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${coverImage})` }}>
                <nav>
                    <ul className="flex-row space-around width-100 py-2 my-0">
                        <li className="mx-1">
                            <button className="link" onClick={() => setCurrentPage('about')}>About</button>
                        </li>
                        <li className="mx-1">
                            <button className="link" onClick={() => setCurrentPage('showcase')}>Projects</button>
                        </li>
                        <li className="mx-1">
                            <button className="link" onClick={() => setCurrentPage('contact')}>Contact</button>
                        </li>
                        <li className="mx-1">
                            <a rel="noreferrer" href="https://docs.google.com/document/d/1U3h60zQ-hPWhbF7PX8xLOMQdHFGeD9mP4pnZHzQk9kU/edit?usp=sharing"
                                target="_blank">Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default Nav;