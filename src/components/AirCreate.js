import React,{Component} from 'react';
import { connect} from 'react-redux';
import { airUpdate, airCreate } from "../actions";
import { Container, Content, Form, Item, Label, Text, Header, Left, Body, Title, Right, Icon, Input, Button } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'

class AirCreate extends Component{
    onButtonPress(){
        const { name, airStatus, ssid, sspassword,deviceType,Id,temp } = this.props;
        this.props.airCreate({ name, airStatus, ssid, sspassword,deviceType,Id,temp });
    }
    render(){
        return(
            <Container>
                <Header noShadow style={{backgroundColor: 'white',borderBottomColor:'transparent'}}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{ color: '#057ce4'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    <Title style={{ color: '#057ce4'}}>Air-Conditioner</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>name</Label>
                            <Input
                                value={this.props.name}
                                onChangeText={value => this.props.airUpdate({prop: 'name',value})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Serial Key</Label>
                            <Input
                                value={this.props.Id}
                                onChangeText={value => this.props.airUpdate({prop: 'Id',value})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>WiFi name</Label>
                            <Input
                                value={this.props.ssid}
                                onChangeText={value => this.props.airUpdate({prop: 'ssid',value})}
                            />
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input
                                secureTextEntry
                                value={this.props.sspassword}
                                onChangeText={value => this.props.airUpdate({prop: 'sspassword',value})}
                            />
                        </Item>
                        <Button full light style={{marginTop:20}} onPress={this.onButtonPress.bind(this)} >
                            <Text style={{ color: '#057ce4'}}>Next</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, airStatus, ssid, sspassword,deviceType,Id,temp } = state.airForm;
    return { name, airStatus, ssid, sspassword,deviceType,Id,temp };
};

export default connect(mapStateToProps,{ airUpdate,airCreate })(AirCreate);