import React, { Component } from "react";

import "./style.scss";
import "font-awesome/css/font-awesome.min.css";
import { withPrefix } from "gatsby-link";

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/yankeesoccernut" target="_blank">
              <i className="fa fa-github" />
            </a>
          </li>
          <li className="icon">
            <a
              href="https://www.linkedin.com/in/scottandersonga"
              target="_blank"
            >
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li className="icon">
            <a href="mailto:sanderson30068@gmail.com" target="_blank">
              <i className="fa fa-envelope" />
            </a>
          </li>
          <li className="icon">
            <a
              href={withPrefix("/static/ScottAndersonSoftwareEngineer.pdf")}
              target="_blank"
            >
              <i className="fa fa-file-pdf-o" />
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using{" "}
          <a href="https://www.gatsbyjs.org/ " target="_blank">
            GatsbyJS
          </a>{" "}
          and starter from{" "}
          <a href="https://www.praagya.com/" target="_blank">
            Praagya Joshi
          </a>
        </div>
      </div>
    );
  }
}

export default Links;
