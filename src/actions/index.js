export function fetchArticles(){
  const articles = require('../../data/articles.json')
  return {
    type: 'FETCH_ARTICLES',
    payload: articles
  }
}
