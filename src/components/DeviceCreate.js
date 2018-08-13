import React,{Component} from 'react';
import { connect} from 'react-redux';
import { deviceUpdate, deviceCreate } from "../actions";
import { Container, Content, Form, Item, Label, Text, Header, Left, Body, Title, Right, Icon, Input, Button } from 'native-base';
import { TouchableOpacity,Modal,View,WebView } from 'react-native';
import { Actions } from 'react-native-router-flux'

class DeviceCreate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
    }
    _onNavigationStateChange (webViewState) {
        this.show();
        setTimeout(() => {this.hide()}, 3000)
        this.onButtonPress2();
    }
    show () {
        this.setState({ modalVisible: true })
    }

    hide () {
        this.setState({ modalVisible: false })
    }
    onButtonPress2(){
        const { name, dimmer, ssid, sspassword,deviceType,Id } = this.props;
        this.props.deviceCreate({ name, dimmer, ssid, sspassword,deviceType,Id });

    }
    onButton(){
        this.setState({ isOpen: true })
    }
    onButtonPress(){
        if(this.state.isOpen== true){
            return(
                <Modal
                    animationType={'slide'}
                    visible={this.state.modalVisible}
                    onRequestClose={this.hide.bind(this)}
                    transparent
                >

                    <WebView
                        style={[{ flex: 1 },]}
                        source={{ uri: `http://google.com` }}
                        scalesPageToFit
                        startInLoadingState
                        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
                    />
                </Modal >
            )
        }


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
                        <Title style={{ color: '#057ce4'}}>Devices</Title>
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
                        <Item stackedLabel>

                            <Label>Serial Key</Label>
                            <Input
                                value={this.props.Id}
                                onChangeText={value => this.props.deviceUpdate({prop: 'Id',value})}
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

                        <Button full light style={{marginTop:20}} onPress={this.onButtonPress2.bind(this)} >
                            <Text style={{ color: '#057ce4'}}>Next</Text>
                        </Button>
                        {this.onButtonPress()}
                    </Form>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
  const { name, dimmer, ssid, sspassword,deviceType,Id } = state.deviceForm;
  return { name, dimmer, ssid, sspassword,deviceType,Id };
};

export default connect(mapStateToProps,{ deviceUpdate,deviceCreate })(DeviceCreate);