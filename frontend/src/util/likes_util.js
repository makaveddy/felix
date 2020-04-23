import axios from 'axios';

export const createLike = ({userId, mediaId, title}) => {
  return axios.post('/api/likes', {user: userId, media: mediaId, title: title})
}

export const removeLike = likeId => {
  return axios.delete(`/api/like/${likeId}`)
}

export const fetchUserLikes = userId => {
  return axios.get(`/api/likes/users/${userId}`)
}