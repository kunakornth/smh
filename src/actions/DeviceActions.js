import firebase from 'firebase';
import {
    DEVICE_UPDATE,
    DEVICE_CREATE,
} from './types'
import {Actions} from 'react-native-router-flux'


export const deviceUpdate =({ prop, value })=>{
    return{
        type: DEVICE_UPDATE,
        payload: { prop, value }
    };
};

export const deviceCreate =( {ssid, sspassword} )=>{

    return(dispatch)=> {
        firebase.database().ref('deviceId')
            .push({ssid, sspassword})
            .then(() => {
                dispatch({ type: DEVICE_CREATE});
                Actions.pop({type: 'reset'});
            });
    };
};