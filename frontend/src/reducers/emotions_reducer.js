import { RECEIVE_EMOTIONS, RECEIVE_EMOTION } from "../actions/emotion_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EMOTIONS:
            return action.emotions;
        case RECEIVE_EMOTION:
            return Object.assign({}, state, {[action.emotion.id]: action.emotion});
        default: 
            return state;
    }
};