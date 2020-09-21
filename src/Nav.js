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
    state = {
        on: false,
    }

    toggle = () => {
        console.log('clicked')
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        const { render } = this.props;
        return (<div>
            {render({
                on: this.state.on,
                toggle: this.toggle
            })}
        </div>

            // <div className="navbar">
            //     <div className="brand-title">Patience Deaton</div>
            //     <a className='toggle-btn' onClick={this.toggle}>
            //         <span className='bar'></span>
            //         <span className='bar'></span>
            //         <span className='bar'></span>
            //     </a>
            //     <div className="navbar-links">
            //         {this.state.on &&
            //             <ul>
            //                 <li>
            //                     <a href="#" target="_blank" rel="link"> Home</a>
            //                 </li>
            //                 <li>
            //                     <a href="#" target="_blank" rel="link"> About</a>
            //                 </li>
            //                 <li>
            //                     <a href="#" target="_blank" rel="link"> Projects</a>
            //                 </li>
            //                 <li>
            //                     <a href="#" target="_blank" rel="link"> Contact</a>
            //                 </li>
            //             </ul>
            //         }
            //     </div>
            // </div>
        )
    }
}


