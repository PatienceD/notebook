import React, { Component } from 'react'
import '../../App.css';
import portrait from '../img/me.jpeg';

class Intro extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" id="intro-section">
                        <div className="col-6">
                            <img src={portrait} className="selfie" alt="Portrait of Developer" />
                        </div>
                        <div className="col-6" id="short-about">
                            <h1>Hey There</h1>
                            <br></br>
                            <p>My name is Patience Deaton, and I currently reside in Orlando FL. I'm a Full Stack Developer with a passion for Frontend, currently
                                pursuing new opportunities.</p>
                                <br></br>
                            <button type="button" className="btn btn-primary btn-lg" data-toggle="button" aria-pressed="false" autoComplete="off">Projects</button>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default Intro;