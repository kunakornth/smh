import {
    DEVICE_UPDATE
} from "../actions/types";

const INITIAL_STATE = {
    dimmer: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case DEVICE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
};