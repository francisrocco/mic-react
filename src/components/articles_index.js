import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment'

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr className="table-header vert-align-mid-head">
                <th><br/>UNPUBLISHED ARTICLES ({this.props.articles.length})<br/><br/></th>
                <th>AUTHOR<br/><br/></th>
                <th>WORDS<br/><br/></th>
                <th>SUBMITTED<br/><br/></th>
              </tr>
            </thead>
            <tbody>

              {this.props.articles.map((article) =>
                <tr>
                  <td className="article-cell">
                    <div>
                      <img className="article-avatar" src={article.image}/>
                      <a href= {article.url} target="_blank"> {article.title} </a>
                    </div>
                    { article.bootcamp ? <div className="bootcamp">Bootcamp</div> : null }
                  </td>
                  <td className="author-name vert-align-mid">{article.profile.first_name} {article.profile.last_name}</td>
                  <td className="text-center vert-align-mid">{article.words}</td>
                  <td className="text-center vert-align-mid">{ moment(article.publish_at).fromNow() }</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

        <Link to="/articles/new" className="btn btn-default btn-block">Add An Article</Link><br/>
      </div>
    )
  }
};

function mapStateToProps(state){
  return {
    articles: state.articles
  }
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(ArticlesIndex);
