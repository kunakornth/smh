import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    FORGOT_SUCCESS,
    FORGOT_FAIL,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
    CREATE_USER
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password:'',
    user:null,
    error:'',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload};
        case PASSWORD_CHANGED:
            return {...state, password:action.payload};
        case LOGIN_USER:
            return {...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return {...state,
                ...INITIAL_STATE,
                user: action.payload,
            };
        case LOGIN_USER_FAIL:
            return {...state, error: '  ',password: '', loading: false };
        case CREATE_USER:
            return {...state,loading: true,error: ''};
        case CREATE_USER_SUCCESS:
            return {...state,
                ...INITIAL_STATE,
                user: action.payload,
            };
        case CREATE_USER_FAIL:
            return {...state,error:'',password:'',loading:false};
        case FORGOT_SUCCESS:
            return {...state,
                ...INITIAL_STATE,
            user:action.payload};
        case FORGOT_FAIL:
            return {...state, error: '  ',loading:false};
        default:
            return state;
    }
};