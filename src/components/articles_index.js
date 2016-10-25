import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment'

class ArticlesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { limit: 10, showMore: true }
    this.showMore = this.showMore.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  showMore() {
    debugger
    this.setState({
      limit: this.state.limit + 10,
      showMore: this.state.limit + 10 < this.props.articles.length
    });
  }

  renderButton() {
    if (!this.state.showMore) return null;
    return (
      <button className="btn btn-default btn-block" onClick={this.showMore}>Show More</button>
    );
  }

  render() {

    var articles = this.props.articles.slice(0,this.state.limit);

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

              {articles.map((article) =>
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

        { this.renderButton() }

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
