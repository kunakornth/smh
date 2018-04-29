import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeviceFormReducer from'./DeviceFormReducer';
import DeviceReducer from './DeviceReducer'

export default combineReducers({
    auth: AuthReducer,
    deviceForm: DeviceFormReducer,
    devices: DeviceReducer
});