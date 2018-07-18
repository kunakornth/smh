import firebase from 'firebase';
import {
    DEVICE_UPDATE,
    DEVICE_CREATE,
    DEVICES_FETCH_SUCCESS,
    DEVICE_DELETE
} from './types'
import {Actions} from 'react-native-router-flux'
import {Linking} from "react-native";


export const deviceUpdate =({ prop, value })=>{
    return{
        type: DEVICE_UPDATE,
        payload: { prop, value }
    };
};

export const deviceCreate =( {name, dimmer, ssid, sspassword ,deviceType,Id} )=>{

    return(dispatch)=> {
        const { currentUser } = firebase.auth();
        fetch(`http://192.168.4.1/ssid?a=${ssid}&b=${sspassword}&c=${currentUser.uid}`)
        firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id)
            .set({name,dimmer,ssid, sspassword,deviceType,Id})
            .then(() => {
                dispatch({ type: DEVICE_CREATE});
                Actions.tabbar();

            });
    };
};

export const devicesFetch = () => {

    return (dispatch) => {
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/devices/`)
            .on('value', snapshot => {
                dispatch({ type: DEVICES_FETCH_SUCCESS,payload: snapshot.val()});
            });
    };
};

