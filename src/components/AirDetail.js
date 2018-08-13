import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Label, Picker} from 'native-base';
import {View, TouchableOpacity, Alert, Slider, ListView} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import TimerScreen from "./TimerScreen";




class AirDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        };
    }
    componentDidMount(){
        const { temp } = this.props.device;
        this.setState({selected: temp});
    }

    onValueChange(value: string) {
        const { currentUser } = firebase.auth();
        const { Id} = this.props.device;
        this.setState({
            selected: value
        });
        firebase.database().ref(`/users/${currentUser.uid}/devices/`+Id) .update({temp:value});

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
                    <Thumbnail style={{margin:15}} large source= {require('../../public/asset/icon/icon-aircon.png')}/>
                    <TouchableOpacity style={{margin:15}}  onPress={()=>Actions.editDeviceName({device:this.props.device})}>
                        <Text style={{fontSize: 40,}}>{name}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1 ,alignItems: 'center'}}>
                    <Form>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{margin:14}}>Temperature :</Text>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="24 °C" value="24" />
                                <Picker.Item label="25 °C" value="25" />
                                <Picker.Item label="26 °C" value="26" />
                            </Picker>
                        </View>
                    </Form>

                </View>
                <View style={{flex:0.5 ,flexDirection: 'row',}}>

                    <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No'},
                                {text: 'Yes', onPress: ()=> {
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


export default AirDetail;