export default function articlesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_ARTICLES':
      return action.payload;
    case 'ADD_ARTICLE':
      return [action.payload, ...state]
    default:
      return state;
  }
};
