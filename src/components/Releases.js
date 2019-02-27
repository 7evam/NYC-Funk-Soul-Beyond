import React, {Component} from 'react';
import {firebaseDB} from '../config/config.js'


class Releases extends Component {

constructor() {
  super();
  this.state = {
    releases: [],
  }
}

  componentWillMount(){
    const releases = firebaseDB.collection('releases').get()
      .then(releases => {
        releases.forEach(release => {
          let data = release.data()
          this.setState({
            releases: this.state.releases.concat(data)
          })
        })
      })
  }

  render() {
    const {releases} = this.state
    return(
    <div className="releases">
      <div>
          <h1>Releases</h1>
          {
            releases.map((release, index) => (
            <div key={index}>
              <h1>{release.name}</h1>
              <img src ={release.art} />
              <hr/>
            </div>
            ))
          }

      </div>
    </div>
      )
  }
}

export default Releases
