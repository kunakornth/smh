import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DeviceFormReducer from'./DeviceFormReducer';
import DeviceReducer from './DeviceReducer';
import AirFormReducer from './AirFormReducer';
import AirReducer from './AirReducer';

export default combineReducers({
    auth: AuthReducer,
    deviceForm: DeviceFormReducer,
    devices: DeviceReducer,
    airForm: AirFormReducer,
    airs: AirReducer,
});