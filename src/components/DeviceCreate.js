import React,{Component} from 'react';
import { connect} from 'react-redux';
import { Container, Content, Form, Item, Label, Text, Header, Left, Body, Title, Right, Icon, Input, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class DeviceCreate extends Component{
    render(){
        return(
            <Container>
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
                            <Label>WiFi name</Label>
                            <Input />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry />
                        </Item>
                        <Button full light style={{marginTop:20}} onPress={()=>alert('EEEEE')} >
                            <Text>Next</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default DeviceCreate;