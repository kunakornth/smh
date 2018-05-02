import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Label} from 'native-base';
import {View,TouchableOpacity} from 'react-native'
import {Actions} from "react-native-router-flux";

class DeviceDetail extends Component{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    onRowPress(){
        Actions.timerScreen({device:this.props.device});
    }

=======
>>>>>>> parent of 8da2c9c... Change Database
=======
>>>>>>> parent of 8da2c9c... Change Database
=======
>>>>>>> parent of 8da2c9c... Change Database
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
                    <TouchableOpacity onPress={this.onRowPress.bind(this)} style={{flex:1,justifyContent: 'center',alignItems: 'center',borderRightWidth:1}}>
                        <Icon  name="md-time"/>
                        <Text style={{margin:5}}>Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>
                        <Icon type="FontAwesome" name="window-close"/>
                        <Text style={{margin:5}}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.1}}/>

=======
=======
>>>>>>> parent of 8da2c9c... Change Database
=======
>>>>>>> parent of 8da2c9c... Change Database
                <Content>
                    <Form>
                        <Item stackedLabel style={{backgroundColor:'red'}}>
                            <Thumbnail large source= {require('../../public/asset/icon/smart-plug.png')}/>
                        </Item>
                        <Item stackedLabel>
                            <Label>Device name</Label>
                        </Item>
                    </Form>
                </Content>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 8da2c9c... Change Database
=======
>>>>>>> parent of 8da2c9c... Change Database
=======
>>>>>>> parent of 8da2c9c... Change Database
            </Container>
        );
    }
}

export default DeviceDetail;