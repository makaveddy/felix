import axios from "axios";

// export const fetchAllMedia = () => {
//   return axios.get("/api/emotions/media");
// };

export const fetchMedia = (mediaId) => {
  return axios.get(`/api/emotions/emotionId/${mediaId}`);
};
