import * as APIUtil from "../util/emotion_api_util";

export const RECEIVE_EMOTIONS = "RECEIVE_EMOTIONS";
export const RECEIVE_EMOTION = "RECEIVE_EMOTION";

export const receiveEmotions = emotions => ({
    type: RECEIVE_EMOTIONS,
    emotions
});

export const receiveEmotion = emotion => ({
    type: RECEIVE_EMOTION,
    emotion
});

export const 