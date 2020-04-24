import { combineReducers } from "redux";
import session from "./session_reducer";
import media from './media_reducer'
import emotions from "./emotions_reducer";
import errors from "./errors_reducer";
import ui from "./ui_reducer";
import favorites from './favorites_reducer'

const RootReducer = combineReducers({
  session,
  emotions,
  media,
  favorites,
  errors,
  ui,
});

export default RootReducer;
