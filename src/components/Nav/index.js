function Nav() {

    return (
        <header className="flex-row space-between px-1">
            <h2>
                Dustin Huntsberger
            </h2>
            <nav>
                <ul className="flex-row">
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
    )
};

export default Nav;