const databaseUrl = 'http://localhost:3000/api/v1/'

export function fetchArticles(){
  const articles = require('../../data/articles.json')
  return {
    type: 'FETCH_ARTICLES',
    payload: articles
  }
}

export function addArticle(newArticleFromForm) {
  const newArticleFromApi = fetch(`${databaseUrl}articles`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({article: newArticleFromForm})
  }).then(response => {
    return response.json()
  }).then(newArticlePayload => {
    return newArticlePayload
  })

  return {type: 'ADD_ARTICLE', payload: newArticleFromApi}
}
