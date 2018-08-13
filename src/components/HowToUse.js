import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Badge} from 'native-base';
import {View,TouchableOpacity,Alert,Image} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import TimerScreen from "./TimerScreen";
import { connect} from 'react-redux';
import { deviceUpdate, deviceCreate } from "../actions";
import { NetworkInfo } from 'react-native-network-info';


class HowToUse extends Component{

    oncheck(){
        NetworkInfo.getSSID(ssid => {
            if(ssid == 'MyespAC'){
                Actions.deviceCreate();
            }
            else {
                alert('Please change your Wi-Fi to "MyespAC" .')
            }
        });

    }

    render(){
        return(
            <Container>
                <Header noShadow style={{backgroundColor: 'transparent',borderBottomColor:'transparent'}}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{fontSize: 35, color: '#057ce4'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>

                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1 }} />
                    <View style={{flex:8 ,flexDirection: 'column',alignItems: 'center',}} >
                        <Text style={{fontSize: 25,}}>Connecting to your </Text>
                        <Text style={{fontSize: 25,}}>Smart Plug network</Text>

                        <Badge primary style={{marginTop:20}}>
                            <Text>1</Text>
                        </Badge>
                        <Text style={{marginTop:5}}>
                            Select Wi-Fi setting from your phone settings.
                        </Text>
                        <Image
                            style={{resizeMode: 'contain',margin:5}}
                            source={require('./../../public/asset/item/wifi.jpg')}
                        />
                        <Badge primary>
                            <Text>2</Text>
                        </Badge>
                        <Text style={{marginTop:5}}> Connect to your Smart Plug's Wi-Fi network. It looks something like this:</Text>
                        <Image
                            style={{resizeMode: 'contain',margin:9}}
                            source={require('./../../public/asset/item/myespac.png')}
                        />
                        <Badge primary>
                            <Text>3</Text>
                        </Badge>
                        <Text style={{marginTop:5}}> Come back to application.</Text>
                        <TouchableOpacity style={{marginTop:55}} onPress={this.oncheck.bind(this)}>
                            <Text style={{marginTop:10 , color:'#057ce4'}} >I connected to my Smart Plug's Wi-Fi.</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1 }} />
                </View>


            </Container>
        );
    }
}

export default connect()(HowToUse);