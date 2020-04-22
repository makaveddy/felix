import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import emotionErrorsReducer from './emotion_errors_reducer'
import mediaErrorsReducer from './media_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  emotion: emotionErrorsReducer,
  media: mediaErrorsReducer,
});
