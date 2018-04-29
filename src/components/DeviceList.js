import React,{ Component } from 'react';
import { Container, Content, Text, Header, Body, Title, Right, Left, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class DeviceList extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>
                            Devices
                        </Title>

                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => Actions.deviceCreate()}>
                            <Icon style={{fontSize: 35, color: 'white'}} name='md-add' />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    <Text> Devices List</Text>
                    <Text> Devices List</Text>
                    <Text> Devices List</Text>
                    <Text> Devices List</Text>
                    <Text> Devices List</Text>
                    <Text> Devices List</Text>
                </Content>
            </Container>
        )
    }
}

export default DeviceList;