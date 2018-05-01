import React,{Component} from 'react';
import { Text, List, Icon } from 'native-base';
import { Image,TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class AirItems extends Component{

    onRowPress(){
        Actions.airCreate({air:this.props.air});
    }
    checkButton(){
        const { airStatus } = this.props.air;
        if (airStatus == 0){
            return (
                <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{flex:0.5,justifyContent: 'center',}}>
                    <Icon style={{fontSize: 35, color: '#FF0000'}} name='power' />
                </TouchableOpacity>
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

    onButtonPress(){
        const { airStatus,Id } = this.props.air;
        if (airStatus == 0){
            firebase.database().ref('airId/'+Id) .update({airStatus:1,})
        }
        else{
            firebase.database().ref('airId/'+Id).update({airStatus:0,})
        }

    }


    render(){
        const { name} = this.props.air;
        return (

            <List>
                <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                    <View style={{flexDirection: 'row',margin:20}}>
                        <View style={{flex:1}}>
                            <Image
                                style={{width:70,height:70}}
                                source={require('../../public/asset/icon/icon-aircon.png')}
                            />
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

export default (AirItems);