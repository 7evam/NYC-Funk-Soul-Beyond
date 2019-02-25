import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../images/NYCFSBLogo.png'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';
import Artists from './Artists.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'


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

      <div className="content">
        <AppBar className={classNames(classes.root, className)}>
          <Tabs>
            <Link to='/'><img src={logo} /> </Link>
            <div>
              <Link to='/artists'><Tab className="item" label="Artists" /></Link>
            </div>
            <div>
              <Tab label="Recent Releases" />
            </div>
            <div>
              <Tab label="Upcoming Shows" />
            </div>
            <div>
              <Tab label="Venues" />
            </div>
          </Tabs>
        </AppBar>
      </div>


    )
  }
}

export default withStyles(styles)(Navbar);
