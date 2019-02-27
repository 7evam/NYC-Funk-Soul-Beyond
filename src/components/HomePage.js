import React, {Component} from 'react';
import Articles from './Articles'
import OfficialPlaylist from './OfficialPlaylist'
import {firebaseDB} from '../config/config.js'

class Layout extends Component {

  constructor() {
  super();
  this.state = {
    articles: [],
  }
}

  componentWillMount(){
    const articles = firebaseDB.collection('articles').get()
      .then(articles => {
        articles.forEach(article => {
          let data = article.data()
          this.setState({
            articles: this.state.articles.concat(data)
          })
        })
      })
  }

  render() {
    return(
    <div>
      <Articles articles={this.state.articles}/>
      <OfficialPlaylist className='fullPlaylist'/>
    </div>
      )
  }
}

export default Layout;

