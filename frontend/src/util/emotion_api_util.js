import axios from "axios";

export const fetchAllEmotions = () => {
  return axios.get('/api/emotions');
}

export const fetchEmotion = (emotionId) => {
  return axios.get(`/api/emotions/${emotionId}`)
}

axios.get("/api/users/test").then((res) => console.log(res));