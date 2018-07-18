
import React,{Component} from 'react';
import { Text, List, ListItem, Left, Thumbnail, Body, Right, Icon } from 'native-base';
import { Image,TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';


class ListItems extends Component{

    onRowPress(){
        const { deviceType} = this.props.device;
        if(deviceType == "Smart Plug"){
            Actions.deviceDetail({device:this.props.device});
        }
        else{
            Actions.airDetail({device:this.props.device});
        }
    }
    checkButton(){
        const { dimmer,deviceType,airStatus } = this.props.device;

        if(deviceType == "Smart Plug"){
            if (dimmer == 0){
                return (
                    <View style={{flex:0.5,justifyContent: 'center',}}>
                        <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
                            <Icon style={{fontSize: 35, color: '#FF0000'}} name='power' />
                        </TouchableOpacity>
                    </View>
                );
            }
            else{
                return (
                    <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{flex:0.5,justifyContent: 'center',}}>
                        <Icon style={{fontSize: 35, color: '#00CC33'}} name='power' />
                    </TouchableOpacity>
                )
            }
        }
        else{
            if (airStatus == 0){
                return (
                    <View style={{flex:0.5,justifyContent: 'center',}}>
                        <TouchableOpacity onPress={this.onButtonPress2.bind(this)} >
                            <Icon style={{fontSize: 35, color: '#FF0000'}} name='power' />
                        </TouchableOpacity>
                    </View>
                );
            }
            else{
                return (
                    <TouchableOpacity onPress={this.onButtonPress2.bind(this)} style={{flex:0.5,justifyContent: 'center',}}>
                        <Icon style={{fontSize: 35, color: '#00CC33'}} name='power' />
                    </TouchableOpacity>
                )
            }
        }



    }

    onButtonPress(){
        const { dimmer,uid } = this.props.device;
        const { currentUser } = firebase.auth();
        if (dimmer == 0){
            firebase.database().ref(`/users/${currentUser.uid}/devices/`+uid) .update({dimmer:255,})
        }
        else{
            firebase.database().ref(`/users/${currentUser.uid}/devices/`+uid).update({dimmer:0,})
        }

    }

    onButtonPress2(){
        const { airStatus,uid } = this.props.device;
        const { currentUser } = firebase.auth();
        if (airStatus == 0){
            firebase.database().ref(`/users/${currentUser.uid}/devices/`+uid) .update({airStatus:1,})
        }
        else{
            firebase.database().ref(`/users/${currentUser.uid}/devices/`+uid).update({airStatus:0,})
        }

    }


    checkIcon(){
        const { deviceType } = this.props.device;
        if( deviceType=="Smart Plug"){
            return(
                <Image
                    style={{width:70,height:70}}
                    source={require('../../public/asset/icon/smart-plug.png')}
                />
            )
        }
        else{
            return(
                <Image
                    style={{width:70,height:70}}
                    source={require('../../public/asset/icon/icon-aircon.png')}
                />
            )
        }


    }

    render(){
        const { name} = this.props.device;
        return (
            <List>

                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                    <View style={{flexDirection: 'row',margin:20}}>
                        <View style={{flex:1}}>
                            {this.checkIcon()}
                        </View>
                        <View style={{flex:3,justifyContent: 'center',marginLeft:15}}>
                            <Text style={{color:'black'}}>
                                {name}
                            </Text>
                        </View>
                        {this.checkButton()}
                    </View>
                </TouchableOpacity>

            </List>

        );
    }
}

export default (ListItems);