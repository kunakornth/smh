import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeviceFormReducer from'./DeviceFormReducer'

export default combineReducers({
    auth: AuthReducer,
    deviceForm: DeviceFormReducer
});