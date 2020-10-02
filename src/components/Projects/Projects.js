import React, { Component } from 'react'
import '../../App.css';
import chronicguru from '../img/chronicguru.png';
import learnsativa from '../img/learnsativa.png';
import ladderlabs from '../img/ladderlabs.png';
import dogclick from "../img/dogclick.PNG";


class Projects extends Component {

    render() {
        return (
            <div>
                <div id="project-con">
                    <h1>Featured Projects</h1>
                    <hr></hr>
                    <div className="row" id="pro1">
                        <div className="col-sm-6">
                            <a href="https:www.chronicguru.com" target="_blank" rel="noopener noreferrer">
                                <img src={chronicguru} className="chronic-guru" alt="Chronic Guru Website Screenshot" />
                            </a><br></br><br></br>
                            <h1>Chronic Guru</h1>
                            <em><small>Created By: Patience Deaton 2019</small></em>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https:www.chronicguru.com" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <a href="https://www.learnsativa.org" target="_blank" rel="noopener noreferrer">
                                <img src={learnsativa} className="learn-sativa" alt="Learn Sativa Screenshot" />
                            </a><br></br><br></br>
                            <h1>Learn Sativa University</h1>
                            <em><small>Created By: LSU 2019</small></em>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https://www.learnsativa.org" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>
                        </div>

                    </div>
                    <div className="row" id="pro2">
                        <div className="col-sm-6">
                            <a href="https://patienced.github.io/Dog-Click-Game/" target="_blank" rel="noopener noreferrer">
                                <img src={dogclick} className="ladder-labs" alt="Ladder Labs Website Screenshot" />
                            </a><br></br><br></br>
                            <h1>Dog Click Game</h1>
                            <em><small>Created By: Patience Deaton 2020</small></em>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https://patienced.github.io/Dog-Click-Game/" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <a href="https://ladderlabs.io" target="_blank" rel="noopener noreferrer">
                                <img src={ladderlabs} className="ladder-labs" alt="Ladder Labs Website Screenshot" />
                            </a><br></br><br></br>
                            <h1>Ladder Labs</h1>
                            <em><small>Open Source Project, 2020</small></em>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https://ladderlabs.io" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;