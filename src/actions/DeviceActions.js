import firebase from 'firebase';
import {
    DEVICE_UPDATE,
    DEVICE_CREATE,
    DEVICES_FETCH_SUCCESS
} from './types'
import {Actions} from 'react-native-router-flux'


export const deviceUpdate =({ prop, value })=>{
    return{
        type: DEVICE_UPDATE,
        payload: { prop, value }
    };
};

export const deviceCreate =( {name, dimmer, ssid, sspassword} )=>{

    return(dispatch)=> {
        firebase.database().ref('deviceId')
            .push({name,dimmer,ssid, sspassword})
            .then(() => {
                dispatch({ type: DEVICE_CREATE});
                Actions.pop({type: 'reset'});
            });
    };
};

export const devicesFetch = () => {

    return (dispatch) => {
        firebase.database().ref('deviceId')
            .on('value', snapshot => {
                dispatch({ type: DEVICES_FETCH_SUCCESS,payload: snapshot.val()});
            });
    };
};

