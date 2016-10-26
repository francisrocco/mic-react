export function fetchArticles(){
  const articles = require('../../data/articles.json')
  return {
    type: 'FETCH_ARTICLES',
    payload: articles
  }
}

export function addMoreArticles(){
  const moreArticles = require('../../data/more-articles.json')
   
  return {
    type: 'ADD_ARTICLES',
    payload: moreArticles
  }
}
