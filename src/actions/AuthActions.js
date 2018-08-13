import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    FORGOT_SUCCESS,
    FORGOT_FAIL,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS

} from "./types";
import {Actions} from 'react-native-router-flux';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export  const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const createUser =({email,password})=>{
    return (dispatch) =>{
        dispatch({type: CREATE_USER});
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => createUserSuccess(dispatch,user))
            .catch(()=> createUserFail(dispatch));
    };
};
const createUserSuccess = (dispatch,user) => {
    dispatch({
        type: CREATE_USER_SUCCESS,
        payload: user
    });
    alert('Success');
    Actions.pop();
};
const createUserFail = (dispatch) =>{
    dispatch({type:CREATE_USER_FAIL});
    alert('Fail to create');
};

export const loginUser = ({email,password})=> {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch(() => loginUserFail(dispatch));
    };
};


const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL});
    alert('Email or Password is Wrong!');
};


const loginUserSuccess = (dispatch,user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.tabbar();
};

export const forgot = ({email}) => {
    return (dispatch) => {
        dispatch({type: LOGIN_USER});

        firebase.auth().sendPasswordResetEmail(email)
            .then(user =>forgotSuccess(dispatch,user))
            .catch(() => forgotFail(dispatch));
    }
};
const forgotSuccess = (dispatch,user)=>{
    dispatch({
        type: FORGOT_SUCCESS,
        payload: user
    });
    alert("Please check your email to reset password")
    Actions.pop();
};

const forgotFail = (dispatch) => {
    dispatch({ type: FORGOT_FAIL});
    alert('Wrong Email!')
};

const authAutoSignIn = () => {
    return (dispatch) => {
        dispatch({type: AUTH_AUTO_SIGN_IN});
    }
};