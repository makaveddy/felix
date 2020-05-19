import * as APIUtil from '../util/favorites_util'

export const ADD_FAVORITE = "CREATE_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const RECEIVE_USER_FAVORITES = "RECEIVE_USER_FAVORITES";

const addFavorite = favorite => ({
  type: ADD_FAVORITE,
  favorite
});

const deleteFavorite = favoriteId => ({
  type: DELETE_FAVORITE,
  favoriteId
});

const receiveUserFavorites = favorites => ({
  type: RECEIVE_USER_FAVORITES,
  favorites
});

export const createFavorite = data => dispatch => {
  return APIUtil.createFavorite(data)
  .then(favorite => dispatch(addFavorite(favorite)))
  .catch(err => console.log(err))
};

export const removeFavorite = favoriteId => dispatch => {
  debugger
  return APIUtil.removeFavorite(favoriteId)
  .then(favorite => (dispatch(deleteFavorite(favorite.data._id))))
  .catch(err => console.log(err))
};

export const fetchFavorites = userId => dispatch => {
  debugger
  return APIUtil.fetchFavorites(userId)
  .then(favorites => dispatch(receiveUserFavorites(favorites)))
  .catch(err => console.log(err))
}