import { CREATE_LIKE, REMOVE_LIKE, RECEIVE_USER_LIKES } from '../actions/like_actions';

export default ( state = {}, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case CREATE_LIKE:
      return Object.assign({}, state, { [action.like.id]: action.like})
    case REMOVE_LIKE:
      delete newState[action.like.id];
      return newState;
    case RECEIVE_USER_LIKES:
      return action.likes
    default:
      return state;
  }
}