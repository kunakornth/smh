import React,{Component} from 'react';
import { Container,Header,Left,Body,Right,Title,Content,Text } from 'native-base';
import { TouchableOpacity,View, StyleSheet, Picker, AppState, Platform } from 'react-native';
import DatePicker from 'react-native-datepicker'
import PushNotification from 'react-native-push-notification';
import PushController from './PushController';

class TimerScreen extends Component{
    constructor(props){
        super(props)
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            seconds: 5,
            date:"2016-05-15",
            time: new Date().getHours().toString() ,
        }
    }
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    handleAppStateChange(appState) {
        if (appState === 'background') {
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            if (Platform.OS === 'ios') {
                date = date.toISOString();
            }

            PushNotification.localNotificationSchedule({
                message: "My Notification Message",
                date,
            });
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
                    <Text style={styles.welcome}>
                        Choose your notification time in seconds.
                    </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.seconds}
                        onValueChange={(seconds) => this.setState({ seconds })}
                    >
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="10" value={10} />
                        <Picker.Item label="15" value={15} />
                    </Picker>
                    <PushController />

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    picker: {
        width: 100,
    },
});


export default TimerScreen;