import React,{Component} from 'react';
import { connect} from 'react-redux';
import { deviceUpdate, deviceCreate } from "../actions";
import { Container, Content, Form, Item, Label, Text, Header, Left, Body, Title, Right, Icon, Input, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class DeviceCreate extends Component{
    onButtonPress(){
        const { ssid, sspassword } = this.props;
        this.props.deviceCreate({ ssid, sspassword });
    }
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
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
  const { ssid, sspassword } = state.deviceForm;
  return { ssid, sspassword };
};

export default connect(mapStateToProps,{ deviceUpdate,deviceCreate })(DeviceCreate);