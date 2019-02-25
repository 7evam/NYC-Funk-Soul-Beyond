import React, {Component} from 'react';
import Layout from './Layout'

class Artist extends Component {
  render() {
    const name = this.props.name
    console.log(name)
    return(
    <div className="artists">
      <h1>artists go here 1st</h1>
      <h1>one artist goes here</h1>
      <h1>one artist goes here</h1>
      <h1>one artist goes here</h1>
      <p>{this.props.match.params.id}</p>

    </div>
      )
  }
}

export default Artist;
