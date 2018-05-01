import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import DeviceList from './components/DeviceList';
import DeviceCreate from'./components/DeviceCreate';
import DeviceForm from './components/DeviceForm';
import AirCreate from './components/AirCreate';
import AirList from './components/AirList';
import AirForm from './components/AirForm';
import { StyleSheet,View } from 'react-native';
import DeviceDetail from './components/DeviceDetail';
import TimerScreen from './components/TimerScreen';


const RouterComponent =() => {

    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm}  hideNavBar  />
                </Scene>
                <Scene key="deviceCreate" component={DeviceCreate} title="Add Device" hideNavBar  />
                <Scene key="deviceForm" component={DeviceForm} hideNavBar/>
                <Scene key="timerScreen" component={TimerScreen} title="DeviceDetail" hideNavBar initial />
                <Scene key="deviceDetail" component={DeviceDetail} title="DeviceDetail" hideNavBar  />
                <Scene key="tabbar" tabs tabBarPosition={'bottom'} iconName="alarm" tabStyle={styles.tabStyle}  >
                    <Scene key="devices" title="Devices">
                        <Scene
                            key="deviceList"
                            component={DeviceList}
                            title="Devices"
                            hideNavBar
                        >
                        </Scene>

                    </Scene>
                    <Scene key="airs" title="Air-Conditioner" >
                        <Scene
                            key="airList"
                            component={AirList}
                            title="Devices"
                            hideNavBar
                        />


                    </Scene>
                </Scene>
                <Scene key="airCreate" component={AirCreate}  hideNavBar />
                <Scene key="airForm" component={AirForm} hideNavBar />
            </Scene>
        </Router>
    );
};

const styles = StyleSheet.create({
    tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 0,
        paddingBottom: 2,

    },
});


export default RouterComponent;