import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function ArticlesIndex (props) {
  return (
  <div>
    <h1>DA ARTICLES</h1>

      <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>UNPUBLISHED ARTICLES ({props.articles.length})</th>
            <th>AUTHOR</th>
            <th>WORDS</th>
            <th>SUBMITTED</th>
          </tr>
        </thead>

        <tbody>

          {props.articles.map((article) =>
            <tr>
              <td>{article.title}</td>
              <td>{article.author.name}</td>
              <td>{article.word_count}</td>
              <td>YAS</td>
            </tr>
          )}

        </tbody>
      </table>
    </div>

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
