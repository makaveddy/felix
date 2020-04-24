import { ADD_FAVORITE, DELETE_FAVORITE, RECEIVE_USER_FAVORITES } from '../actions/favorite_actions';

export default ( state = {}, action ) => {
  Object.freeze(state);

  switch (action.type) {
    case ADD_FAVORITE:
      debugger;
      return Object.assign({}, state, {
        [action.favorite.data._id]: action.favorite,
      });
    case DELETE_FAVORITE:
      debugger
      let newState = Object.assign({}, state);
      debugger
      delete newState.data[action.favoriteId];
      debugger
      return newState;
    case RECEIVE_USER_FAVORITES:
      return action.favorites;
    default:
      return state;
  }
}