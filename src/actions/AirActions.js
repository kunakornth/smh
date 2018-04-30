import firebase from 'firebase';
import {
    AIR_UPDATE,
    AIR_CREATE,
    AIRS_FETCH_SUCCESS
} from './types'
import {Actions} from 'react-native-router-flux'


export const airUpdate =({ prop, value })=>{
    return{
        type: AIR_UPDATE,
        payload: { prop, value }
    };
};

export const airCreate =( {name, airStatus, ssid, sspassword} )=>{

    return(dispatch)=> {
        firebase.database().ref('airId')
            .push({name,airStatus,ssid, sspassword})
            .then(() => {
                dispatch({ type: AIR_CREATE});
                Actions.pop({type: 'reset'});
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
