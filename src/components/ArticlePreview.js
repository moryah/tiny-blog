// src/components/ArticlePreview.js
import { Link } from 'react-router';
import React from 'react';

export default class ArticlePreview extends React.Component {
  render() {
    return (
      <Link to={`/article/${this.props.id}`}>

      <div className="article-preview">
        <h2 className="name">{this.props.name}</h2>
      </div>
      </Link>
    );
  }
}
