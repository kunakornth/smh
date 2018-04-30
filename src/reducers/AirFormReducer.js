import {
    AIR_CREATE,
    AIR_UPDATE
} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    ssid: '',
    sspassword:'',
    airStatus:0,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case AIR_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case AIR_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};