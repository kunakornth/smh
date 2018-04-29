import {
    DEVICE_UPDATE
} from './types'
export const deviceUpdate =({ prop, value })=>{
    return{
        type: DEVICE_UPDATE,
        payload: { prop, value }
    };
};