import React, { Component } from 'react'
import '../../App.css';
import portrait from '../img/me.jpeg';


class Intro extends Component {

    render() {
        return (
            <div>
                <div className="container" id="intro-section">
                    <div className="row">
                        <div className="col-6">
                            <img src={portrait} className="selfie" alt="Portrait of Developer" />
                        </div>
                        <div className="col-sm-6" id="short-about">
                            <h1>Hey There</h1>
                            <br></br>
                            <p>My name is Patience Deaton, and I currently reside in Orlando FL. I'm a Full Stack Developer with a passion for Frontend, currently
                                pursuing new opportunities.</p>
                            <br></br>
                            <div className="row" >
                                <a href="https://www.linkedin.com/in/patience-deaton-2647b917b/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin fa-3x" id="social-icons"></i>
                                </a>
                                <a href="https://github.com/PatienceD?tab=repositories" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github-square fa-3x" id="social-icons"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="arrow-down">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-4">
                            <a href="/#">
                                <i className="fas fa-angle-double-down fa-5x"></i><span>Continue</span>
                            </a>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4"></div>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Intro;