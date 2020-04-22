import { RECEIVE_EMOTION_ERRORS } from "../actions/emotion_actions";

const emotionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_EMOTION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default emotionErrorsReducer;
