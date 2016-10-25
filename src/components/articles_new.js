import React, { Component } from 'react';
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class ArticleNew extends React.Component {
  constructor(props) {
    super(props)
    this.newArticleHandler = this.newArticleHandler.bind(this)
  }

  newArticleHandler(event) {
    event.preventDefault()
    const newArticle = {title: this.refs.title.value, content: this.refs.content.value}
    this.props.actions.addArticle(newArticle)
    browserHistory.push(`/`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.newArticleHandler}>
          <h2>Create New Article</h2>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" className="form-control" placeholder="title" ref='title' />
          </div>
          <div className="form-group">
            <label>Content:</label>
            <textarea className="form-control" placeholder="content" ref='content' />
          </div>
          <button type="submit" className="btn btn-default btn-block">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(ArticleNew);
