import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ArticlesIndex from './components/articles_index';
import ArticleNew from './components/articles_new';

export default (
  <Route path="/" component={ App } >
    <IndexRoute component={ ArticlesIndex } />
    <Route path="/articles/new" component={ ArticleNew } />
  </Route>
)
