import React,{Component} from 'react';
import { Text, List, ListItem, Left, Thumbnail, Body, Right, Icon } from 'native-base';
import { Image } from 'react-native';

class ListItems extends Component{
    render(){
        const { ssid } = this.props.device;

        return (
            <List>
                <ListItem>
                    <Image
                        style={{width:80,height:80}}
                        source={require('../../public/asset/icon/smart-plug.png')}
                    />
                    <Body>
                    <Text style={{color:'black'}}>
                        {ssid}
                    </Text>

                    </Body>
                    <Right>
                        <Icon style={{fontSize: 35, color: 'black'}} name='md-add' />
                    </Right>
                </ListItem>
            </List>
        );
    }
}

export default ListItems;