import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../images/NYCFSBLogo.png'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';
import Navbar from './navbar.js'
import Articles from './articles.js'
import OfficialPlaylist from './officialPlaylist.js'
import {firebaseDB} from '../config/config.js'
import Artists from './artists.js'

class App extends Component {

  constructor() {
  super();
  this.state = {
    artists: []
  }
}

  componentDidMount(){
    const artists = firebaseDB.collection('artists')
    const query = artists.orderBy('name')
    query.get()
      .then(artists => {
        artists.forEach(artist => {
          let data = artist.data()
          this.setState({
            artists: this.state.artists.concat(data)
          })
        })
      })
  }

  render() {
    return(
    <div>
      <Navbar/>
      <Articles className="articles"/>
      <OfficialPlaylist className="officialPlaylist"/>
    </div>
      )
  }
}

export default App;
