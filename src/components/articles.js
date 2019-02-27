import React, {Component} from 'react';
import {firebaseDB} from '../config/config.js'


class Articles extends Component {

  render() {
    const {articles} = this.props
    return(
    <div className="articles">
      <div>
          {
            articles.map((article, index) => (
            <div key={index}>
              <h1>{article.title}</h1>
              <img src ={article.image} />
              <h4>{article.date.toDate().toString()}</h4>
              <p>{article.body}</p>
              <hr/>
            </div>
            ))
          }
      </div>
    </div>
      )
  }
}

export default Articles
