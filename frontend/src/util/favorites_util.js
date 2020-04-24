import axios from "axios";

export const createFavorite = ({ userId, contentId, contentTitle, contentEmotion, contentUrl}) => {
  return axios.post("/api/favorites/", {
    user: userId,
    contentId,
    contentTitle,
    contentEmotion,
    contentUrl,
  });
};

export const removeFavorite = (favoriteId) => {
  debugger
  return axios.delete(`/api/favorites/${favoriteId}`);
};

export const fetchFavorites= (userId) => {
  return axios.get(`/api/favorites/users/${userId}`);
};
