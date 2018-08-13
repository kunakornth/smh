import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Label} from 'native-base';
import {View, TouchableOpacity, Alert, Slider, ListView} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import TimerScreen from "./TimerScreen";
import {devicesFetch} from "../actions";
import { connect } from 'react-redux';




class DeviceDetail extends Component{
    constructor(props) {

        super(props);
        this.state = {
            value: 0,
            press: false,
            press2: false,
        };
    }

    checkpress(){
        const { currentUser } = firebase.auth();
        const { Id,dimmer} = this.props.device;
        if(this.state.press2==true){
            firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id) .update({dimmer:0});
            this.setState({press2: false,})
        }
    }

    checkDimmer(){
        const { currentUser } = firebase.auth();
        const { Id,dimmer} = this.props.device;

        if(this.state.press == true ){
            {this.checkpress()}
            return(
                <Text style={{fontSize: 20,}}>dimmer : {this.state.value}</Text>
            )
        }

        else {
            return(
                <Text style={{fontSize: 20,}}>dimmer : {dimmer}</Text>
            );
        }
    }
    checkSlider(){
        const { currentUser } = firebase.auth();
        const { Id,dimmer} = this.props.device;
        if(this.state.press == true){
            return(
                <Slider
                    style={{width: 250, height: 40}}
                    value={this.state.value}
                    maximumValue={255}
                    minimumValue={0}
                    onValueChange={value => this.setState({value})}
                    onSlidingComplete={ value => {firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id) .update({dimmer:value,})} }
                />
            )
        }
    }

    render(){
        const { name,Id,dimmer} = this.props.device;
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
                <View style={{flex:1 ,alignItems: 'center'}}>
                    <Thumbnail style={{margin:15}} large source= {require('../../public/asset/icon/smart-plug.png')}/>
                    <TouchableOpacity style={{margin:15}}  onPress={()=>Actions.editDeviceName({device:this.props.device})}>
                        <Text style={{fontSize: 40,}}>{name}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1 ,alignItems: 'center'}}>


                        {this.checkSlider()}
                    <View style={{flexDirection: 'row'}}>
                        {this.checkDimmer()}
                        <TouchableOpacity style={{marginLeft:15}} onPress={()=> this.setState({press:true,press2:true})}>
                            <Icon  type="Ionicons" active name='md-settings' />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{flex:0.5 ,flexDirection: 'row',}}>

                    <TouchableOpacity onPress={()=>{
                        Alert.alert(
                        'Alert',
                        'Are you sure you want to delete ?',
                        [
                            {text: 'No'},
                            {text: 'Yes', onPress: ()=> {
                                    const { currentUser } = firebase.auth();
                                    firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id).remove().then(()=> {Actions.deviceList()})
                            }}
                        ],
                        {cancelable: true}
                    )
                    }} style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                        <Icon type="FontAwesome" name="window-close"/>
                        <Text style={{margin:5}}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.1}}/>

            </Container>
        );
    }
}

const mapStateToProps = state => {
    const devices = _.map(state.devices, (val, uid) =>{
        return { ...val, uid };
    });

    return {devices}
};


export default connect(mapStateToProps,{devicesFetch})(DeviceDetail);