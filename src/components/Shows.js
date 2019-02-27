import React, {Component} from 'react';
import Layout from './Layout'
import Iframe from './Iframe'

class Shows extends Component {
  render() {
    return(
    <div className="artists">
      <h1>shows go here 1st</h1>
      <h1>shows go here</h1>
      <h1>shows go here</h1>
      <h1>shows go here</h1>
      <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12100.26263009104!2d-73.9023072!3d40.6945516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d04555d34846937!2sH0L0!5e0!3m2!1sen!2sus!4v1551222173137" height="450" width="600"/>    </div>
      )
  }
}

export default Shows;
