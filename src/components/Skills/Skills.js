import React, { Component } from 'react'
import '../../App.css';


class Skills extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                           <h4>Frontend Languages</h4>
                           <ul>
                               <li>HTML5</li>
                               <li>CSS3</li>
                               <li>React</li>
                               <li>Angular</li>
                               <li>JavaScript and jQuery</li>
                           </ul>
                        </div>
                        <div className="col-6">
                            <h4>Backend Languages</h4>
                            <ul>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Skills;