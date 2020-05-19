import { ADD_FAVORITE, DELETE_FAVORITE, RECEIVE_USER_FAVORITES } from '../actions/favorite_actions';

export default ( state = {}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_FAVORITE:
      debugger
      return Object.assign({}, state, {[action.favorite.data._id]: action.favorite.data});
    case DELETE_FAVORITE:
      let newState = Object.assign({}, state);
      delete newState[action.favoriteId];
      debugger
      return newState;
    case RECEIVE_USER_FAVORITES:
      return action.favorites;
    default:
      return state;
  }
}