import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function ArticlesIndex (props) {
  return (
  <div>
    <h1>DA ARTICLES</h1>
  </div>
  )
};

function mapStateToProps(state){
  return {
    articles: state.articles
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(ArticlesIndex);
