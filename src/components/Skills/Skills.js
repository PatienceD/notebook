import React, { Component } from 'react'
import '../../App.css';
import html from "../img/html2.png"
import css from "../img/css2.png"
import javascript from "../img/javascript.jpg"
import react from "../img/react.png"
import angular from "../img/angular.png"
import bootstrap from "../img/bootstrap.png"



class Skills extends Component {

    render() {
        return (
            <div>
                <div id="skill-section">
                    <h1>Skills</h1>
                    <hr></hr>
                    <div className="row" id="frontend-row">
                        <div className="col-md-4" >
                            <h3 id="frontend-header">Frontend</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="frontend-lang">
                                <div className="row">
                                    <div className="col-sm-2" >
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={css} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={javascript} id="logo" alt="logo"></img>

                                    </div>
                                    <div className="col-sm-2">
                                        <img src={react} id="logo" alt="logo"></img>

                                    </div>
                                    <div className="col-sm-2">
                                        <img src={angular} id="logo" alt="logo"></img>

                                    </div>
                                    <div className="col-sm-2">
                                        <img src={bootstrap} id="logo" alt="logo"></img>
                                    </div>
                                </div>

                                {/* <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>JavaScript and jQuery</li>
                                </ul> */}
                            </div>
                        </div>
                    </div><br></br><br></br>
                    <div className="row" id="backend-row">
                        <div className="col-md-4">
                            <h3 id="backend-header">Backend</h3>
                        </div>
                        <div className="col-md-6">
                            <div className="backend-lang">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                    <div className="col-sm-2">
                                        <img src={html} id="logo" alt="logo"></img>
                                    </div>
                                </div>
                            </div>
                            {/* <ul>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;