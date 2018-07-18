import React, { Component } from 'react';
import { connect } from 'react-redux';
import {emailChanged,  forgot} from "../actions";
import { View,ImageBackground,TouchableOpacity } from 'react-native';
import { Container, Button, Text, Spinner,Form, Item, Input, Icon} from 'native-base';
import {Actions} from "react-native-router-flux";
class ForgotForm extends Component {
    constructor(props){
        super(props);
        this.state={
            showToast:false
        };
    }

    onEmailChange(text){
        this.props.emailChanged(text);
    }


    onButtonPress(){
        const { email }= this.props;
        this.props.forgot({email});

    }
    rederError(){
        if(this.props.error){
            return (
                <View style={{marginTop:20}} >
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            )
        }
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner/>;
        }

        return(
            <Button full light style={{marginTop:30}} onPress={this.onButtonPress.bind(this)} >
                <Text>SEND EMAIL</Text>
            </Button>
        );
    }
    render(){
        return (
            < Container >
                <ImageBackground source={require('./../../public/asset/bg/bgblur.png')} style={{flex:1}}>
                    <View style={{flex:1 ,justifyContent: 'center', alignItems: 'center',}} >
                        <Text style={{fontSize: 25,color:'white',fontWeight: 'bold'}}>Forgot Your Password? </Text>
                    </View>
                    <View style={{flex:1 ,backgroundColor: 'rgba(0, 0, 0, 0.3)'}} >
                        <View style={{flex:4 }} >
                            <View style={{flex:3 , flexDirection: 'row'}} >
                                <View style={{flex:1 }} />

                                <View style={{flex:8 ,flexDirection: 'column'}} >
                                    <Form>
                                        <Item rounded style={{marginTop: 20}}>
                                            <Icon style={{color:'#e1e1e1'}} type="FontAwesome" active name='envelope-o' />
                                            <Input
                                                style={{color:'white'}}
                                                placeholderTextColor={'#f0f0f0'}
                                                placeholder='Email'
                                                value={this.props.email}
                                                onChangeText={this.onEmailChange.bind(this)}
                                            />
                                        </Item>
                                    </Form>
                                    {this.renderButton()}

                                </View>
                                <View style={{flex:1}} />
                                <View />
                            </View>
                        </View>
                        <View style={{flex:1 ,justifyContent: 'center',flexDirection: 'row'}} >
                            <View style={{flex:1}} />
                            <View style={{flex:8}}>
                                < TouchableOpacity style={{width: 150, height: 50}} onPress={()=>Actions.pop()} >
                                    <Text style={{fontSize: 12,color:'white',fontWeight: 'bold'}}>BACK TO LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}} />
                        </View>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

const styles = {
    errorText:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({auth}) => {
    const  {email,loading}=auth;

    return { email,loading};
};



export default connect(mapStateToProps,{emailChanged,forgot})(ForgotForm);