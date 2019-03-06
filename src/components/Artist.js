import React, {Component} from 'react';
import {firebaseDB} from '../config/config.js'

class Artist extends Component {
  constructor() {
    super();
    this.state = {
      artist: {}
    }
  }

componentWillMount(){
const id = this.props.match.params.name
const artists = firebaseDB.collection('artists')
const query = artists.where('name', '=', id)
query.get()
.then(artists => {
  artists.forEach(artist => {
    const data = artist.data()
      this.setState({
        artist: data
      })
    })
  })
}


  render() {
    return(
    <div className="artists">
      <h1>artists go here 1st</h1>
      <h1>one artist goes here</h1>
      <h1>one artist goes here</h1>
      <h1>one artist goes here</h1>
      <h1>{this.state.artist.name}</h1>

    </div>
      )
  }
}

export default Artist;
