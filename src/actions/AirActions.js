import firebase from 'firebase';
import {
    AIR_UPDATE,
    AIR_CREATE,
    AIRS_FETCH_SUCCESS
} from './types'
import {Actions} from 'react-native-router-flux'
import {Linking} from "react-native";


export const airUpdate =({ prop, value })=>{
    return{
        type: AIR_UPDATE,
        payload: { prop, value }
    };
};

export const airCreate =( {name, airStatus, ssid, sspassword ,deviceType,Id ,temp} )=>{

    return(dispatch)=> {
        const { currentUser } = firebase.auth();
        fetch(`http://192.168.4.1/ssid?a=${ssid}&b=${sspassword}&c=${currentUser.uid}`);
        firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id)
            .set({name,airStatus,ssid, sspassword ,deviceType,Id,temp})
            .then(() => {
                dispatch({ type: AIR_CREATE});
                Actions.tabbar();
            });
    };
};

export const airsFetch = () => {

    return (dispatch) => {
        firebase.database().ref('airId')
            .on('value', snapshot => {
                dispatch({ type: AIRS_FETCH_SUCCESS,payload: snapshot.val()});
            });
    };
};
