import React,{Component} from 'react';
import { Container,Header,Left,Body,Right,Title,Content,Text } from 'native-base';
import { TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker'


class TimerScreen extends Component{
    constructor(props){
        super(props)
        this.state = {
            date:"2016-05-15",
            time: new Date().getHours().toString() ,
        }
    }
    render(){

        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>
                            Timer
                        </Title>
                    </Body>
                    <Right>
                        <DatePicker
                            hideText={true}
                            iconSource={require('../../public/asset/icon/plus.png')}
                            androidMode="spinner"
                            style={{width: 50}}
                            date={this.state.time}
                            mode="time"
                            format="HH:mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            minuteInterval={10}
                            onDateChange={(time) => {this.setState({time: time});}}
                        />
                    </Right>
                </Header>
                <Content>
                    <Text >time: {this.state.time}</Text>



                </Content>
            </Container>
        );
    }
}

export default TimerScreen;