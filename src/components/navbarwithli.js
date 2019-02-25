import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import logo from '../images/NYCFSBLogo.png'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = {
  root:{
    height:"60px",
    backgroundImage: "linear-gradient(to right, #ffffff, #384A9C)",
    backgroundColor:"white",
    color:"black"
  }
}

class Navbar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {classes, children, className } = this.props
    return (
    <Router>
      <div className="content">
        <AppBar className={classNames(classes.root, className)}>
          <Tabs>

            <ul>
              <li>
                <Tab className="item" label="Artists" />
              </li>
              <li>
                <Tab label="Recent Releases" />
              </li>
              <li>
                <Tab label="Upcoming Shows" />
              </li>
              <li>
                <Tab label="Venues" />
              </li>
            </ul>
          </Tabs>
        </AppBar>
      </div>
    </Router>
    )
  }
}

export default withStyles(styles)(Navbar);
