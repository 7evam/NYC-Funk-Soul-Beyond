import React, {Component} from 'react';
import {firebaseDB} from '../config/config.js'
import Iframe from './Iframe'

class Artist extends Component {
  constructor() {
    super();
    this.state = {
      artist: {},
      releases: [],
      src: ''
    }
    this.changeSong = this.changeSong.bind(this)
  }

componentWillMount(){
const urlParam = this.props.match.params.name
const artists = firebaseDB.collection('artists')
const query = artists.where('urlParam', '==', urlParam)
query.get()
.then(artists => {
  artists.forEach(artist => {
    const data = artist.data()
      this.setState({
        artist: data
      })
    })
  })
const releases = firebaseDB.collection('releases')
const releaseQuery = releases.where('artist', '==', 'Valipala')
releaseQuery.get()
.then(releases => {
  releases.forEach(release => {
    let releaseData = release.data()
    this.setState({
      releases: this.state.releases.concat(releaseData)
    })
  })
})
}

changeSong(src){
  this.setState({
    src: src
  })
}


  render() {
    let {releases} = this.state
    return(
    <div className="artists">
      <div className = 'wrapper'>
      <h1>{this.state.artist.name}</h1>
      <img className='artist-image' src={this.state.artist.image} />

      <div>
      {
        releases.map((release, index) => (
          <div key={index}>
            <h1 onClick={() => this.changeSong(release.src)}>{release.name}</h1>
          </div>
          ))
      }
      {
        this.state.src ?
        <Iframe src={this.state.src} width="300" height="500"></Iframe> :
        null
      }
      </div>
      </div>

    </div>
      )
  }
}

export default Artist;
