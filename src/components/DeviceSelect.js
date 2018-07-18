import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Label} from 'native-base';
import {View,TouchableOpacity,Alert,WebView} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import TimerScreen from "./TimerScreen";
import { connect} from 'react-redux';
import { deviceUpdate, deviceCreate } from "../actions";
import { NetworkInfo } from 'react-native-network-info';

class DeviceSelect extends Component{



    render(){
        return(
            <Container>
                <Header noShadow style={{backgroundColor: 'transparent',borderBottomColor:'transparent'}}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{fontSize: 35, color: '#778899'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <View style={{flex:1 ,alignItems: 'center'}}>
                    <Text style={{fontSize: 40,}}>Add Device</Text>
                    <TouchableOpacity style={{marginTop:55}} onPress={()=>Actions.howToUse()}>
                        <Thumbnail large source= {require('../../public/asset/icon/smart-plug.png')}/>
                        <Text style={{marginTop:10}} >Smart Plug</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop:55}} onPress={()=>Actions.howToUse2()}>
                        <Thumbnail style={{marginLeft:38}} large source= {require('../../public/asset/icon/icon-aircon.png')}/>
                        <Text style={{marginTop:10}} >Smart Air-Conditioner</Text>
                    </TouchableOpacity>


                </View>


            </Container>
        );
    }
}

export default connect()(DeviceSelect);