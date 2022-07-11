function Nav({ setCurrentPage }) {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <button className="nav-link" onClick={() => setCurrentPage('about')}>About</button>
                    </li>
                    <li>
                        <button className="nav-link" onClick={() => setCurrentPage('showcase')}>Projects</button>
                    </li>
                    <li>
                        <button className="nav-link" onClick={() => setCurrentPage('contact')}>Contact</button>
                    </li>
                    <li>
                        <a className="nav-link" rel="noreferrer" href="https://docs.google.com/document/d/1U3h60zQ-hPWhbF7PX8xLOMQdHFGeD9mP4pnZHzQk9kU/edit?usp=sharing"
                            target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;