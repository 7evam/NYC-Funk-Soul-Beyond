import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../images/NYCFSBLogo.png'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';
import Articles from './articles.js'
import OfficialPlaylist from './OfficialPlaylist.js'
import {firebaseDB} from '../config/config.js'
import Artists from './Artists.js'
import Artist from './Artist.js'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Layout from './Layout.js'
import HomePage from './HomePage.js'
import NotFound from './NotFound.js'

class App extends Component {

  constructor() {
  super();
  this.state = {
    artists: [],
    articles: [],
  }
}
// test change

  componentWillMount(){
    const artists = firebaseDB.collection('releases')
    const query = artists.where('artist','==','awxvhd0jCvMpBEjfTgQc')
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
    const name = "valipala"
    return(
      <BrowserRouter>
      <div>
      <Layout>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/artists' component={Artists}/>
      <Route path ='/artists/:id' component={(props)=> <Artist {...props} name={name} />}/>
      <Route component={NotFound} />
      </Switch>
      </Layout>
      </div>
      </BrowserRouter>
      )
  }
}

export default App;
