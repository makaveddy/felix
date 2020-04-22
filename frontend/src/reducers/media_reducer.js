import { RECEIVE_MEDIA } from '../actions/media_actions';

export default (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_MEDIA:
      return Object.assign({}, state, { [action.media.id]: action.media })
    default:
      return state;
  }
}