import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged ,loginUser, } from "../actions";
import { View,ImageBackground,TouchableOpacity } from 'react-native';
import { Container, Button, Text, Spinner,Form, Item, Input, Icon} from 'native-base';
import {Actions} from "react-native-router-flux";
class LoginForm extends Component {
    componentDidMount(){

    }

    onCreatePress(){
        Actions.createid();
    }
    onForgotPress(){
        Actions.forgot();
    }
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text)
    }
    onButtonPress(){
        const { email , password }= this.props;
        this.props.loginUser({email,password});

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
            <Button full  light style={{marginTop:20}} onPress={this.onButtonPress.bind(this)} >
                <Text>Sign In</Text>
            </Button>
        );
    }
    render(){
        return (
            < Container >
                <ImageBackground source={require('./../../public/asset/bg/bg.png')} style={{flex:1}}>
                    <View style={{flex:1 ,}} />
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
                                        <Item rounded style={{marginTop: 20}}>
                                            <Icon style={{color:'#e1e1e1'}} type="FontAwesome" active name='unlock-alt' />
                                            <Input
                                                style={{color:'white'}}
                                                placeholderTextColor={'#f0f0f0'}
                                                placeholder='Password'
                                                secureTextEntry={true}
                                                value={this.props.password}
                                                onChangeText={this.onPasswordChange.bind(this)}
                                            />
                                        </Item>

                                    </Form>
                                    {this.renderButton()}

                                    <View style={{ flexDirection: 'row',justifyContent: 'space-between',marginTop: 10}}>

                                            < TouchableOpacity style={{width: 150, height: 50}} onPress={this.onCreatePress.bind(this)} >
                                                <Text style={{fontSize: 12,color:'white',fontWeight: 'bold'}}>CREATE ACCOUNT</Text>
                                            </TouchableOpacity>


                                            < TouchableOpacity style={{width: 150, height: 50,marginLeft:21}} onPress={this.onForgotPress.bind(this)} >
                                                <Text style={{fontSize: 12,justifyContent:'flex-end',color:'white',fontWeight: 'bold'}}>FORGOT PASSWORD</Text>
                                            </TouchableOpacity>

                                    </View>
                                    {this.rederError()}
                                </View>
                                <View style={{flex:1 }} />
                            </View>
                        </View>
                        <View style={{flex:1 ,justifyContent: 'center',}} >

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
    const  {email, password, error, loading}=auth;

    return { email, password, error, loading};
};



export default connect(mapStateToProps,{ emailChanged,passwordChanged,loginUser })(LoginForm);