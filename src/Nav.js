import React, { Component } from 'react'
import './App.css';

// handleClick = () => {
//   const togglebtn = document.getElementsByClassName('toggle-btn')[0]
//   const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//   togglebtn.addEventListener('click', () => {
//     console.log('clicked')
//     navbarLinks.classList.toggle('active')
//   })
// }

export default class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
        // this.navLinks = this.navLinks.bind(this);
        // this.closeNavbar = this.closeNavbar.bind(this);
    }


    toggleNavbar() {
        console.log('clicked')
        this.setState(state => ({
            open: !this.state.open
        }))
    }

    navLinks() {
        return (
            <div className="navbar-links">
                <ul>
                    <li>
                        <a href="/#" rel="link"> Home</a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="link"> About</a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="link"> Projects</a>
                    </li>
                    <li>
                        <a href="/#" target="_blank" rel="link"> Contact</a>
                    </li>
                </ul>
            </div>
        )
    }

    // closeNavbar() {
    //     console.log('extra click')
    //     if (this.state.open !== true) {
    //         debugger;
    //         this.toggleNavbar();
    //     }
    // }

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="brand-title">Patience Deaton</div>
                    <div className='toggle-btn' onClick={this.toggleNavbar}>
                        {/* isopen={!this.state.collasped} */}
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                    {this.state.open ? this.navLinks() : ''}
                    {/* onClick={this.closeNavbar} */}
                </div>
            </div>
        )
    }
}


