import * as APIUtil from "../util/media_api_util";

export const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
export const RECEIVE_MEDIA_ERRORS = 'RECEIVE_MEDIA_ERRORS';

const receiveMedia = media => ({
  type: RECEIVE_MEDIA,
  media
})

const receiveMediaErrors = errors => ({
  type: RECEIVE_MEDIA_ERRORS,
  errors,
});


export const getMedia = (mediaId) => dispatch => (
  APIUtil.fetchMedia(mediaId)
  .then(media => dispatch(receiveMedia(media)))
  .catch(err => console.log(err))
);