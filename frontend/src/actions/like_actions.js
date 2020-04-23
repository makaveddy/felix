import * as APIUtil from '../util/likes_util'

export const CREATE_LIKE = "CREATE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_USER_LIKES = "RECEIVE_USER_LIKES";

const createLike = like => ({
  type: CREATE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

const receiveUserLikes = likes => ({
  type: RECEIVE_USER_LIKES,
  likes
});

export const createLike = data => dispatch => {
  return APIUtil.createLike(data)
  .then(likes => dispatch(receiveUserLikes(likes)))
  .catch(err => console.log(err))
};

export const deleteLike = likeId => dispatch => {
  return APIUtil.removeLike(likeId)
  .then(like => dispatch(removeLike(like)))
  .catch(err => console.log(err))
};

export const getUserLikes = userId => dispatch => {
  return APIUtil.fetchUserLikes(userId)
  .then(likes => receiveUserLikes(likes))
  .catch(err => console.log(err))
}