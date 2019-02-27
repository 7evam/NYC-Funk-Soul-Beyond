import React, {Component} from 'react';
import {firebaseDB} from '../config/config.js'

class Artist extends Component {
  constructor() {
    super();
    this.state = {
      artist: {}
    }
  }

    componentDidMount(){
    const id = this.props.match.params.id
    const artists = firebaseDB.collection('artists')
    const query = artists.doc(id).get()
      .then(artist => {
          const data = artist.data()
          this.setState({
          artist: data
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
      <p>{this.state.artist.name}</p>
    </div>
      )
  }
}

export default Artist;
