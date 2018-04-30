import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,Thumbnail,Form,Item,Label} from 'native-base';
import {View,TouchableOpacity} from 'react-native'
import {Actions} from "react-native-router-flux";

class DeviceDetail extends Component{
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
            </Container>
        );
    }
}

export default DeviceDetail;