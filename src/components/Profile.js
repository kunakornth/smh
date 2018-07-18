import React,{Component} from 'react';
import {Content, Container, Text, Icon,Header,Left,Body,Right,List,ListItem,Button,Label,Title} from 'native-base';
import {View,TouchableOpacity,Alert} from 'react-native';
import {Actions} from "react-native-router-flux";
import firebase from 'firebase';
import TimerScreen from "./TimerScreen";

class Profile extends Component{

    onRowPress(){
        Actions.timerScreen({device:this.props.device});
    }


    render(){
        const { currentUser } = firebase.auth();
        return(
            <Container>
                <Header noShadow style={{backgroundColor: 'white',borderBottomColor:'transparent'}}>
                    <Left>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Icon style={{fontSize: 35, color: '#057ce4'}} name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    <Title style={{color:'#057ce4'}}>
                        My Account
                    </Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>MY ACCOUNT</Text>
                        </ListItem>
                        <TouchableOpacity style={{margin:20}}>
                            <Text>{currentUser.email}</Text>
                        </TouchableOpacity>

                        <ListItem itemDivider>
                            <Text > </Text>
                        </ListItem>

                        <Button rounded full light style={{margin:20}} onPress={()=>
                            Alert.alert(
                            'Are you sure?',
                            'You are about to log out',
                            [
                                {text: 'Cancel'},
                                {text: 'Log out', onPress: ()=> {
                                        firebase.auth().signOut();
                                        Actions.auth();
                                    }}
                            ],
                            {cancelable: true}
                        )}>
                            <Text style={{color:'red'}}>Sign Out</Text>
                        </Button>

                    </List>

                </Content>
            </Container>







        );
    }
}

export default Profile;