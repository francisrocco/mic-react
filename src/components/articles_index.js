import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function ArticlesIndex (props) {
  return (
  <div>
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="table-header vert-align-mid-head">
            <th><br/>UNPUBLISHED ARTICLES ({props.articles.length})<br/><br/></th>
            <th>AUTHOR<br/><br/></th>
            <th>WORDS<br/><br/></th>
            <th>SUBMITTED<br/><br/></th>
          </tr>
        </thead>
        <tbody>

          {props.articles.map((article) =>
            <tr>
              <td className="article-cell">
                { article.bootcamp ? <div className="bootcamp">Bootcamp</div> : null }
                <div>
                  <img className="article-avatar" src={article.avatar}/>
                  <div> {article.title} </div>
                </div>
              </td>
              <td className="vert-align-mid">{article.author.name}</td>
              <td className="text-center vert-align-mid">{article.word_count}</td>
              <td className="text-center vert-align-mid">{article.submitted}</td>
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
