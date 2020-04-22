import * as APIUtil from "../util/emotion_api_util";

export const RECEIVE_EMOTIONS = "RECEIVE_EMOTIONS";
export const RECEIVE_EMOTION = "RECEIVE_EMOTION";
export const RECEIVE_EMOTION_ERRORS = "RECEIVE_EMOTION_ERRORS";

const receiveEmotions = emotions => ({
    type: RECEIVE_EMOTIONS,
    emotions
});

const receiveEmotion = emotion => ({
    type: RECEIVE_EMOTION,
    emotion
});

const receiveEmotionErrors = errors => ({
    type: RECEIVE_EMOTION_ERRORS,
    errors
});

export const getEmotions = () => dispatch => (
    APIUtil.fetchAllEmotions()
    .then(emotions => dispatch(receiveEmotions(emotions)))
    .catch(err => console.log(err))
);

export const getEmotion = (emotionId) => dispatch => (
    APIUtil.fetchEmotion(emotionId)
    .then(emotion => dispatch(receiveEmotion(emotion)))
    .catch(err => console.log(err))
);