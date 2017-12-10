// src/components/Layout.js
import React from 'react';
import ArticlePreview from './ArticlePreview';
import articles from '../data/articles';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-tiny-blog.png"/>
          </Link>
        </header>
        <div className="app-content">
        
            <div className="blog-article">
				{this.props.children}
			</div>

			<div className="articles-selector">
				{articles.map(articleData => <ArticlePreview key={articleData.id} {...articleData} />)}
			</div>
        
        </div>
        <footer>
          <p>
          </p>
        </footer>
      </div>
    );
  }
}
