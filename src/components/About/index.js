import { useState } from 'react';

function About() {
    const [skillsOpen, setSkillsOpen] = useState(false)

    function popOpen() {
        setSkillsOpen(!skillsOpen);
    }

    return (
        <div>
            <h2 className="section-title">About Me</h2>
            <div className="about-me">
                <article>
                    <h3>Welcome!</h3>
                    <p>
                        Welcome to my portfolio and thanks for visiting! If you across the top, you will find links to my accomplishments in the coding space as well as links to contact me.
                    </p>
                </article>
                <article>
                    <h3>About Me?</h3>
                    <p>
                        I'm 6'3", enjoy cycling, soccer, and anything tech. I get along with just about everyone and try to
                        make people's day better when I see them. I love trying new foosd, especially those from different
                        cultures.
                    </p>
                </article>
                <article>
                    <h3>Experience</h3>
                    <p>
                        I have been working in IT for 4 years since I was 17. I started working part-time at a non-profit
                        and
                        then moved
                        on to a company of over 500 employees doing help desk tasks and automation. I did lightweight
                        scripts
                        and build automation processes to speed up
                        mundane tasks. After a while, I realised coding was all I wanted to do so, I started a full-stack
                        developer bootcamp through Case Western Reserve University
                        in February 2022. I have been building sites and apps ever since.
                    </p>
                </article>
                <article className="col-12 col-md-4 col-xxl-3">
                    <h3>Professional Traits</h3>
                    <p>
                        I am hardworking, enthusiastic, and passioate about software development. Any skills I don't have, I
                        can pick up quickly and I'm learning new tools and techniques everyday.
                    </p>
                </article>
            </div>
            <div className="tech">
                <button className="btn" type="button" id="skills-btn" onClick={popOpen}>
                    Technical Skills
                </button>
                <div className={skillsOpen ? 'skills-open' : 'skills-list'}>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Technologies</h3>
                        <ul>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                            <li>Moment/Day</li>
                            <li>OAuth 2</li>
                        </ul>
                    </div>
                    <div>
                        <h3>APIs</h3>
                        <ul>
                            <li>REST API</li>
                            <li>Open Weather</li>
                            <li>Spotify</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;