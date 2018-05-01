import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Label} from 'native-base';
import {View,TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';

class DeviceDetail extends Component{


    render(){
        const { name} = this.props.device;
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
                    <Thumbnail style={{margin:15}} large source= {require('../../public/asset/icon/smart-plug.png')}/>
                    <TouchableOpacity style={{margin:15}}>
                        <Text>{name}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1 ,alignItems: 'center'}}>
                    <Text>
                        TODAY'S SUMMARY
                    </Text>
                    <Text style={{margin:5}}>
                        Runtime
                    </Text>
                    <Text style={{margin:15}}>Time</Text>
                </View>
                <View style={{flex:0.5 ,flexDirection: 'row',}}>
                    <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center',borderRightWidth:1}}>
                        <Icon  name="md-time"/>
                        <Text style={{margin:5}}>Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                        <Icon type="FontAwesome" name="window-close"/>
                        <Text style={{margin:5}}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.1}}/>

            </Container>
        );
    }
}

export default DeviceDetail;