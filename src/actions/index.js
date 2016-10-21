const databaseUrl = 'http://localhost:3000/api/v1/'

export function fetchArticles(){
  const articles = fetch(`${databaseUrl}articles`).then(response => {
    return response.json()
  }).then(articlesPayload => {
    return articlesPayload
  })

  return {
    type: 'FETCH_ARTICLES',
    payload: articles
  }
}
