import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Button,Form,Item,Input} from 'native-base';
import {View,TouchableOpacity,Alert,Slider} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import TimerScreen from "./TimerScreen";
import {deviceCreate, devicesFetch, deviceUpdate} from "../actions";
import { connect } from 'react-redux';




class editDeviceName extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            name: ''
        };
    }


    render(){
        const { Id} = this.props.device;
        const { currentUser } = firebase.auth();
        return(
            <Container>
                <Header noShadow style={{backgroundColor: 'transparent',borderBottomColor:'transparent'}}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{ color: '#057ce4'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <View style={{flex:0.25 ,alignItems: 'center'}}>
                    <Text style={{fontSize: 40,}}>Edit device name</Text>
                </View>
                <View style={{flex:1 ,alignItems: 'center', flexDirection: 'row'}} >
                    <View style={{flex:1 }} />
                    <View style={{flex:8 ,flexDirection: 'column',alignItems: 'center',}} >
                        <Item style={{marginTop: 20}}>
                            <Input
                                placeholder='Devices'
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                            />
                        </Item>
                        <Button
                            dark
                            full
                            style={{marginTop:20}}
                            onPress={()=>{
                                firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id).update({name:this.state.name});
                                Actions.tabbar();
                            }}
                        >
                            <Text style={{margin:5}}>Submit</Text>
                        </Button>

                    </View>
                    <View style={{flex:1 }} />
                </View>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { name } = state.deviceForm;
    return { name};
};


export default  connect(mapStateToProps,{ deviceUpdate })(editDeviceName);