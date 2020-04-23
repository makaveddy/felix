import { RECEIVE_EMOTIONS, RECEIVE_EMOTION } from "../actions/emotion_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_EMOTIONS:
            return action.emotions;
        case RECEIVE_EMOTION:
            debugger
            // return Object.assign({}, {[action.emotion.data._id]: action.emotion});
            return action.emotion;
        default: 
            return state;
    }
};