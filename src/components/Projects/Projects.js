import React, { Component } from 'react'
import '../../App.css';
import chronicguru from '../img/chronicguru.png';
import learnsativa from '../img/learnsativa.png';
import ladderlabs from '../img/ladderlabs.png';
import dogclick from "../img/dogclick.png";



class Projects extends Component {

    render() {
        return (
            <div>
                <div className="sur-pros">
                    <div id="project-con">
                        <h1 id="pro-title" className="container">Featured Projects</h1>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-6" >
                                <div className="card" id="pro-card">
                                    <div className="view overlay">
                                        <a href="https:www.chronicguru.com" target="_blank" rel="noopener noreferrer"><img className="card-img-top"
                                            src={chronicguru} alt="Chronic Guru" ></img>
                                            <div className="mask rgba-white-slight"></div></a>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Chronic Guru</h4>
                                        <em><small>Role: Designer, Developer, QA 2019</small></em>
                                        <hr></hr>
                                        <p className="card-text">Languages used: HTML, CSS, React, Javascript, Node.js, and MySQL</p>
                                        <a href="https:www.chronicguru.com" className="black-text d-flex justify-content-end" target="_blank" rel="noopener noreferrer">
                                            <h5>View Project <i className="fas fa-angle-double-right"></i></h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <div className="card" id="pro-card">
                                    <div className="view overlay">
                                        <a href="https://patienced.github.io/Dog-Click-Game/" target="_blank" rel="noopener noreferrer"><img className="card-img-top"
                                            src={dogclick} alt="Dog Memory" ></img>
                                            <div className="mask rgba-white-slight"></div></a>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Dog Memory</h4>
                                        <em><small>Role: Designer, Developer 2020</small></em>
                                        <hr></hr>
                                        <p className="card-text">Created originally by Learn Sativa University. I helped maintain the envrionment, and create enhancements.</p>
                                        <a href="https://patienced.github.io/Dog-Click-Game/" className="black-text d-flex justify-content-end" target="_blank" rel="noopener noreferrer">
                                            <h5>View Project <i className="fas fa-angle-double-right"></i></h5>
                                        </a>
                                        <a href="https://github.com/PatienceD/Dog-Click-Game" className="black-text d-flex justify-content-end" target="_blank" rel="noopener noreferrer">
                                            <h5>View GitHub Repo <i className="fas fa-angle-double-right"></i></h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6" >
                                <div className="card" id="pro-card">
                                    <div className="view overlay">
                                        <a href="https://www.learnsativa.org" target="_blank" rel="noopener noreferrer"><img className="card-img-top"
                                            src={learnsativa} alt="Learn Sativa University" ></img>
                                            <div className="mask rgba-white-slight"></div></a>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Learn Sativa University</h4>
                                        <em><small>Role: Developer 2019</small></em>
                                        <hr></hr>
                                        <p className="card-text">Created originally by Learn Sativa University. I helped maintain the envrionment, and create enhancements.</p>
                                        <a href="https://www.learnsativa.org" className="black-text d-flex justify-content-end" target="_blank" rel="noopener noreferrer">
                                            <h5>View Project <i className="fas fa-angle-double-right"></i></h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <div className="card" id="pro-card">
                                    <div className="view overlay">
                                        <a href="https://ladderlabs.io" target="_blank" rel="noopener noreferrer"><img className="card-img-top"
                                            src={ladderlabs} alt="Ladder Labs" ></img>
                                            <div className="mask rgba-white-slight"></div></a>
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Ladder Labs</h4>
                                        <em><small>Role: Frontend Developer 2020</small></em>
                                        <hr></hr>
                                        <p className="card-text">Languages used: HTML, CSS, React</p>
                                        <a href="https://ladderlabs.io" className="black-text d-flex justify-content-end" target="_blank" rel="noopener noreferrer">
                                            <h5>View Project <i className="fas fa-angle-double-right"></i></h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;