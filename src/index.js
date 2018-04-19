import React, { Component } from 'react';

import { Container, Header, Title, Content, Footer,
		 FooterTab, Button, Left, Right, Body, 
		 Icon, Text, List, ListItem, Thumbnail,
		 Drawer, } from 'native-base';
export default class AnatomyExample extends Component {
  	render() {
  		closeDrawer = () => {
      		this.drawer._root.close()
    	};
    	openDrawer = () => {
      		this.drawer._root.open()
    	};
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
          		<List>
		            <ListItem>
		              	<Thumbnail square size={80} source={{ uri: 'Image URL' }} />
		              	<Body>
		                	<Text>My Name</Text>
		                	<Text note>Its time to build a difference . .</Text>
		              	</Body>
		            </ListItem>
          		</List>
        	</Content>
        	<Footer>
          		<FooterTab>
            		<Button vertical active>
		              	<Icon name="md-outlet" />
		              	<Text>Devices</Text>
		            </Button>
		            <Button vertical >
		              	<Icon type="Entypo" name="air" />
		              	<Text>Air-Conditioner</Text>
		            </Button>
          		</FooterTab>
       	 	</Footer>
      	</Container>
    );
  }
}