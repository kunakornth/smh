import _ from 'lodash';
import React,{ Component } from 'react';
import { Container, Content, Header, Body, Title, Right, Left, Icon,ListItem,Text } from 'native-base';
import { TouchableOpacity,ListView,YellowBox,Linking,WebView,Modal,View   } from 'react-native';
import { connect } from 'react-redux';
import {devicesFetch} from "../actions";
import { Actions } from 'react-native-router-flux';
import ListItems from './ListItems';
import firebase from 'firebase';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};



class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'true'
        };
    }
    componentWillMount(){
        this.props.devicesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        //nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still old props

        this.createDataSource(nextProps);
    }

    createDataSource({ devices }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(devices);
    }

    renderRow(device){
        return <ListItems device={device} />;
    }



    render(){
        console.log(this.props);
        return(
            <Container>
                    <Header noShadow style={{backgroundColor: 'white',borderBottomColor:'transparent'}}>
                        <Left>
                            <TouchableOpacity onPress={() =>{
                                Actions.profile();
                            }
                            }>
                                <Icon style={{ color: '#057ce4'}} type="FontAwesome"  name='user-circle-o' />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Title style={{color:'#057ce4'}}>
                                Devices
                            </Title>

                        </Body>
                        <Right>

                            <TouchableOpacity onPress={() => Actions.deviceSelect() }>
                                <Icon style={{fontSize: 35, color: '#057ce4'}} name='md-add' />
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <Content>

                        <ListView
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                        />

                    </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const devices = _.map(state.devices, (val, uid) =>{
        return { ...val, uid };
    });

    return {devices}
};

export default connect(mapStateToProps,{devicesFetch})(DeviceList);