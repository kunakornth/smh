import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Content, Footer,
     FooterTab, Button, Left, Right, Body, 
     Icon, Text, List, ListItem, Thumbnail,
     Drawer, TouchableOpacity,Form, Item, Input, Label} from 'native-base';
export default class login extends Component {
    render() {
      closeDrawer = () => {
          this.drawer._root.close()
      };
      openDrawer = () => {
          this.drawer._root.open()
      };
      return (
        <Container >
            <View style={{flex:1 ,backgroundColor: 'powderblue'}} />
            <View style={{flex:1 ,backgroundColor: 'skyblue'}} >
                <View style={{flex:4 }} >
                  <View style={{flex:3 , flexDirection: 'row'}} >
                      <View style={{flex:1 }} />
                      <View style={{flex:8 ,flexDirection: 'column'}} >
                      <Form>
                        <Item floatingLabel>
                          <Label>Email</Label>
                          <Input />
                        </Item>
                        <Item floatingLabel last>
                          <Label>Password</Label>
                          <Input secureTextEntry={true} />
                        </Item>
                      </Form>
                      <Button full light style={{marginTop:20}}>
                          <Text>Sign In</Text>
                      </Button>
                      
                      <Button transparent dark >
                        <Text >Forgot Password?</Text>
                    </Button>
                      </View>
                      <View style={{flex:1 }} />
                  </View>
                </View>
                <View style={{flex:1 ,justifyContent: 'center',}} >
                    <Button transparent dark>
                        <Text >Create Account</Text>
                    </Button>
                </View>
            </View>
        </Container>
    );
  }
}