// src/components/ArticlePage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import articles from '../data/articles';

export default class ArticlePage extends React.Component {
  render() {
    const id = this.props.params.id;
    const article = articles.filter((article) => article.id === id)[0];
    if (!article) {
      return <NotFoundPage/>;
    }
    return (
      <div className="article-full">
        <div className="article">
          <div className="picture-container">
            <img src={`/img/${article.image}`}/>
            <h2 className="name">{article.name}</h2>
          </div>
          <section className="description">
            <p>{article.paragraph1}</p>
            <p>{article.paragraph2}</p>
            <p>{article.paragraph3}</p>
          </section>

        </div>
      </div>
    );
  }
}
