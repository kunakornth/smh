import _ from 'lodash';
import React,{ Component } from 'react';
import { Container, Content, Header, Body, Title, Right, Left, Icon } from 'native-base';
import { TouchableOpacity,ListView } from 'react-native';
import { connect } from 'react-redux';
import {airsFetch} from "../actions";
import { Actions } from 'react-native-router-flux';
import ListItemAir from './ListItemAir';

class AirList extends Component {
    componentWillMount(){
        this.props.airsFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        //nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still old props

        this.createDataSource(nextProps);
    }

    createDataSource({ airs }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2)=> r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(airs);
    }

    renderRow(air){
        return <ListItemAir air={air} />;
    }

    render(){
        console.log(this.props);
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                    <Title>
                        Air-Conditioner
                    </Title>

                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => Actions.airCreate()}>
                            <Icon style={{fontSize: 35, color: 'white'}} name='md-add' />
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
    const airs = _.map(state.airs, (val, uid) =>{
        return { ...val, uid };
    });

    return {airs}
};

export default connect(mapStateToProps,{airsFetch})(AirList);