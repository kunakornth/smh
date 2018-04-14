import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class AnatomyExample extends Component {
  	render() {
    	return (
      	<Container >
        	<Header >
          		<Left>
            		<Button transparent>
              			<Icon name='menu' />
            		</Button>
          		</Left>
          		<Body>
           			<Title>Devices</Title>
          		</Body>
          		<Right>
          			<Button transparent>
              			<Icon name='md-add' />
            		</Button>
          		</Right>
        	</Header>
        	<Content>
          		<Text>
            		This is Content Section
          		</Text>
        	</Content>
        	<Footer>
          		<FooterTab>
            		<Button vertical >
		              	<Icon name="md-outlet" />
		              	<Text>Devices</Text>
		            </Button>
		            <Button vertical active>
		              	<Icon name="person" />
		              	<Text>Profile</Text>
		            </Button>
          		</FooterTab>
       	 	</Footer>
      	</Container>
    );
  }
}