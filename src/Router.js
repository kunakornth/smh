import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import DeviceList from './components/DeviceList';
import DeviceCreate from'./components/DeviceCreate';
import DeviceForm from './components/DeviceForm';

const RouterComponent =() => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm}  hideNavBar initial />
                </Scene>

                <Scene key="main" initial>
                    <Scene
                        key="deviceList"
                        component={DeviceList}
                        title="Devices"
                        hideNavBar
                    />
                    <Scene key="deviceCreate" component={DeviceCreate} title="Add Device" hideNavBar />
                    <Scene
                        key="deviceForm"
                        component={DeviceForm}
                        hideNavBar
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;