import React, { Component } from 'react';
import { Scene, Router, Actions,Stack } from 'react-native-router-flux';
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
import ForgotForm from './components/ForgotForm';
import CreateForm from './components/CreateForm';
import { Container} from 'native-base';
import TabIcon from './components/TabIcon';
import DeviceSelect from './components/DeviceSelect';
import Profile from './components/Profile';
import Routines from './components/Routines';
import HowToUse from './components/HowToUse';
import HowToUse2 from './components/HowToUse2';
import EditDeviceName from './components/editDeviceName';
import AirDetail from './components/AirDetail';


import {PixelRatio} from 'react-native';



class RouterComponent extends Component {
    componentDidMount(){
        Actions.refresh({backTitle: ()=> this.props.title})
    }
    componentWillMount(){
        this.scenes =Actions.create(
            <Container>
                <Router>
                    <Scene key="root" hideNavBar>
                        <Scene key="auth">
                            <Scene key="login" component={LoginForm}  hideNavBar  />
                            <Scene key="forgot" component={ForgotForm}  hideNavBar  />
                            <Scene key="createid" component={CreateForm}  hideNavBar  />
                        </Scene>
                        <Scene key="deviceCreate" component={DeviceCreate} title="Add Device" hideNavBar  />
                        <Scene key="deviceForm" component={DeviceForm} hideNavBar/>
                        <Scene key="timerScreen" component={TimerScreen} title="DeviceDetail" hideNavBar  />
                        <Scene key="deviceDetail" component={DeviceDetail} title="DeviceDetail" hideNavBar  />
                        <Scene key="deviceSelect" component={DeviceSelect} title="DeviceSelect" hideNavBar  />
                        <Scene key="profile" component={Profile} title="Profile" hideNavBar  />
                        <Scene key="howToUse" component={HowToUse} title="HowToUse" hideNavBar  />
                        <Scene key="howToUse2" component={HowToUse2} title="HowToUse2" hideNavBar  />
                        <Scene key="editDeviceName" component={EditDeviceName} title="editDeviceName" hideNavBar  />
                        <Scene key="airDetail" component={AirDetail} title="AirDetail" hideNavBar  />

                        <Scene  key="tabbar"  tabBarPosition={'bottom'}   >
                            <Scene
                                key="deviceList"
                                component={DeviceList}
                                nameIcon="md-outlet"
                                nameType="Ionicons"
                                title="Devices"
                                icon={TabIcon}
                                size={25}
                                hideNavBar
                            />


                        </Scene>

                        <Scene
                            icon={TabIcon}
                            nameIcon="access-alarms"
                            nameType="MaterialIcons"
                            size={25}
                            key="routines"
                            component={Routines}
                            title="Routines"
                            hideNavBar
                        />

                        <Scene key="airCreate" component={AirCreate}  hideNavBar />
                        <Scene key="airForm" component={AirForm} hideNavBar />

                    </Scene>
                </Router>
            </Container>
        )
    }
    render(){
        return(
            <Router scenes={this.scenes}/>
        );
    }
}

const styles = StyleSheet.create({

});


export default RouterComponent;