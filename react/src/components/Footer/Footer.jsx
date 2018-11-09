import React, { Component } from "react"
import { Grid } from "react-bootstrap"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="//worldwater.byu.edu/">WorldWater@BYU</a>
              </li>
              <li>
                <a href="//www.tethysplatform.org/">Tethys</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://worldwater.byu.edu/">BYU Hydroinformatics Lab?</a>,
            created with love
          </p>
        </Grid>
      </footer>
    )
  }
}

export default Footer
