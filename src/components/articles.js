import React, {Component} from 'react';
import {firebaseDB} from '../config/config.js'


class Articles extends Component {

  render() {
    const {articles} = this.props
    return(
    <div className="articles">
      <h1>ARTICLES GO HERE</h1>
      <div>
          {
            articles.map((article, index) => (
            <div key={index}>
              <h1>{article.title}</h1>
              <h4>{article.date.toDate().toString()}</h4>
              <p>{article.body}</p>
            </div>
            ))
          }
      </div>
    </div>
      )
  }
}

export default Articles
