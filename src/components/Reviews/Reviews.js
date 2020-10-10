import React, { Component } from 'react'


class Review extends Component {

    render() {
        return (
            <div>
                <div className="reviews">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h1>LinkedIn Recommendations</h1>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row" id="review">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="box">
                                <h3><i className="fas fa-user-circle fa-2x"></i> Charlotte Rice</h3>
                                <p>Patience is a phenomenal individual who excels at UI Web Development. She easily possess an unmatched desire to grow her knowledge in the field.
                                I had the privilege to work alongside Patience on multiple projects during our UCF Coding Bootcamp Cohort. From the oddities CSS can prove to
                                    throw at even the most experienced developer, to the complexities of React, Patience is an astounding full stack web developer.</p>
                                <p>written 2019</p>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;