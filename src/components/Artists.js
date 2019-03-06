import React, {Component} from 'react';
import Layout from './Layout'
import Iframe from './Iframe'
import {firebaseDB} from '../config/config.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class Artists extends Component {

    constructor() {
  super();
  this.state = {
    artists: [],
  }
}

  componentWillMount(){
    const artists = firebaseDB.collection('artists').get()
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
    const {artists} = this.state
    return(
    <div className="artists">
      <h1>artists go here 1st</h1>
                {
            artists.map((artist, index) => (
            <div key={index}>
              <Link to={`/artists/${artist.name.replace(/ /g,"-")}`}><h1>{artist.name}</h1></Link>
              <img src ={artist.image} />
              <hr/>
            </div>
            ))
          }
      </div>
      )
  }
}

export default Artists;
