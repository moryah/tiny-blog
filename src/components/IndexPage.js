// src/components/IndexPage.js
import React from 'react';
import ArticlePreview from './ArticlePreview';
import articles from '../data/articles';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
		
		<p>"Simplicity is the ultimate sophistication."</p>
		<p>Leonardo da Vinci</p>
		
		<h2>Enjoy in Tiny Blog</h2>
				
      </div>
    );
  }
}
