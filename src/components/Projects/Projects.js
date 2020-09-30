import React, { Component } from 'react'
import '../../App.css';
import chronicguru from '../img/chronicguru.png';
import learnsativa from '../img/learnsativa.png';
import ladderlabs from '../img/ladderlabs.png';


class Projects extends Component {

    render() {
        return (
            <div>
                <div className="container" id="project-con">
                    <h1>Featured Projects</h1>
                    <hr></hr>
                    <div className="row" id="pro1">
                        <div className="col-6">
                            <a href="https:www.chronicguru.com" target="_blank" rel="noopener noreferrer">
                                <img src={chronicguru} className="chronic-guru" alt="Chronic Guru Website Screenshot" />
                            </a>
                        </div>
                        <div className="col-6">
                            <h1>Chronic Guru</h1>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https:www.chronicguru.com" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>
                        </div>
                    </div>
                    <div className="row" id="pro2">
                        <div className="col-6">
                            <a href="https://www.learnsativa.org" target="_blank" rel="noopener noreferrer">
                                <img src={learnsativa} className="learn-sativa" alt="Learn Sativa Screenshot" />
                            </a>
                        </div>
                        <div className="col-6">
                            <h1>Learn Sativa University</h1>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https://www.learnsativa.org" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>
                        </div>
                    </div>
                    <div className="row" id="pro3">
                        <div className="col-6">
                            <a href="https://ladderlabs.io" target="_blank" rel="noopener noreferrer">
                                <img src={ladderlabs} className="ladder-labs" alt="Ladder Labs Website Screenshot" />
                            </a>
                        </div>
                        <div className="col-6">
                            <h1>Ladder Labs</h1>
                            <p>Anim pariatur occaecat nostrud non tempor ullamco id enim. Ad adipisicing dolore sint do. In deserunt cupidatat nulla ut ad mollit do esse esse.
                            Duis ut laboris id aute laborum velit cillum occaecat minim laborum fugiat laboris. Consectetur incididunt id ipsum officia. Irure consequat
                            ipsum id minim exercitation amet cillum.</p>
                            <a href="https://ladderlabs.io" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">View Project</button>
                            </a>                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;