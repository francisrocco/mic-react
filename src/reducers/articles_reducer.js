export default function articlesReducer(state=[], action) {
   
  switch ( action.type ) {
    case 'FETCH_ARTICLES':
      return action.payload;
    case 'ADD_ARTICLES':
      return [...state, ...action.payload]
    default:
      return state;
  }
};
