import axios from "axios";

export const fetchMedia = (mediaId) => {
  return axios.get(`/api/emotions/emotionId/${mediaId}`);
};
