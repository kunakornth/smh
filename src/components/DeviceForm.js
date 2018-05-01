import React, { Component } from 'react';
import {Container, Content, Text, Header, Left, Button, Icon, Title, Right, Body, Form, Item, Label, Input } from 'native-base';
import {Actions} from "react-native-router-flux";
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deviceUpdate } from "../actions";
import { StatusBar } from 'react-native'


class DeviceForm extends Component{
    onButtonPress(){

    }

    render(){
        return (
            <Container>
                <StatusBar
                    backgroundColor={'transparent'}
                    barStyle="light-content"
                />
                <Header>

                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{fontSize: 35, color: 'white'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    <Title>Add Devices</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Device name</Label>
                            <Input
                                value={this.props.name}
                                onChangeText={value => this.props.deviceUpdate({prop: 'name',value})}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Id</Label>
                            <Input
                                value={this.props.Id}
                                onChangeText={value => this.props.deviceUpdate({prop: 'sspassword',value})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>WiFi name</Label>
                            <Input
                                value={this.props.ssid}
                                onChangeText={value => this.props.deviceUpdate({prop: 'ssid',value})}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                value={this.props.sspassword}
                                onChangeText={value => this.props.deviceUpdate({prop: 'sspassword',value})}
                            />
                        </Item>
                        <Button full light style={{marginTop:20}} onPress={this.onButtonPress.bind(this)} >
                            <Text>Next</Text>
                        </Button>
                    </Form>
                </Content>
                <Content style={{backgroundColor:'red'}}/>
                <Content style={{backgroundColor:'green'}}/>
            </Container>
        );
    }
}

const mapStateToProps =(state)=>{
    const { name, ssid, sspassword} =state.deviceForm;

    return { name, ssid,sspassword};
};

export default connect(mapStateToProps,{deviceUpdate})(DeviceForm);