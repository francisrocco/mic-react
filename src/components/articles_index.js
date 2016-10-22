import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function ArticlesIndex (props) {
  return (
  <div>
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-header">
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
              <td className="text-center">{article.word_count}</td>
              <td className="text-center">YAS</td>
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
