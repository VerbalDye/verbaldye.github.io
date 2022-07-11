import data from '../../assets/showcase/projects.json';
const projects = data.projects;

function Showcase() {


    return (
        <div className='showcase'>
            <h2 class="section-title">My Work</h2>
            {projects.reverse().map((project, i) => (
                <div className="showcase-el" style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${require(`../../assets/showcase/img/${project.img_path}`)})` }} key={i}>
                    <div className="showcase-body">
                        <p>{project.description}</p>
                        <div className="showcase-btn">
                            <a href={project.github_link} rel="noreferrer" target="_blank" className="btn">
                                View on Github
                            </a>
                            {project.deployed_link &&
                                <a href={project.deployed_link} rel="noreferrer" target="_blank" className="btn">
                                    View Deployed
                                </a>}
                        </div>
                    </div>
                    <div className="showcase-title">
                        <h3>{project.title}</h3>
                        <p>{project.skills}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Showcase