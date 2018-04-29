import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged ,loginUser } from "../actions";
import { View } from 'react-native';
import { Container, Button, Text, Spinner,Form, Item, Input, Label} from 'native-base';
class LoginForm extends Component {

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
            <Button full light style={{marginTop:20}} onPress={this.onButtonPress.bind(this)} >
                <Text>Sign In</Text>
            </Button>
        );
    }
    render(){
        return (
            < Container >
                <View style={{flex:1 ,backgroundColor: 'white'}} />
                <View style={{flex:1 ,backgroundColor: 'powderblue'}} >
                    <View style={{flex:4 }} >
                        <View style={{flex:3 , flexDirection: 'row'}} >
                            <View style={{flex:1 }} />
                            <View style={{flex:8 ,flexDirection: 'column'}} >
                                <Form>
                                    <Item floatingLabel>
                                        <Label>Email</Label>
                                        <Input
                                            value={this.props.email}
                                            onChangeText={this.onEmailChange.bind(this)}
                                        />
                                    </Item>
                                    <Item floatingLabel last>
                                        <Label>Password</Label>
                                        <Input
                                            secureTextEntry={true}
                                            value={this.props.password}
                                            onChangeText={this.onPasswordChange.bind(this)}
                                        />
                                    </Item>

                                </Form>
                                {this.rederError()}

                                {this.renderButton()}
                            </View>
                            <View style={{flex:1 }} />
                        </View>
                    </View>
                    <View style={{flex:1 ,justifyContent: 'center',}} >

                    </View>
                </View>
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