import { RECEIVE_MEDIA_ERRORS } from "../actions/media_actions";

const mediaErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MEDIA_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default mediaErrorsReducer;
