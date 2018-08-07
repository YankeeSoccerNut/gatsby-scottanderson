import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/yankeesoccernut" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/scottandersonga" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:sanderson30068@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.scottandersononline.com/scottanderson.pdf" target="_blank">
              <i className="fa fa-file-pdf-o"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://www.gatsbyjs.org/ " target="_blank">GatsbyJS</a> and starter from <a href="https://www.praagya.com/" target="_blank">Praagya Joshi</a>
        </div>
      </div>
    )
  }
}

export default Links