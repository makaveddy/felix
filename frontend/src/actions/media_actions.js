import * as APIUtil from "../util/media_api_util";

export const RECEIVE_MEDIA = 'RECEIVE_MEDIA'

export const receiveMedia = media => ({
  type: RECEIVE_MEDIA,
  media
})