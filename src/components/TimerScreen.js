import React,{Component} from 'react';
import { Container,Header,Left,Body,Right,Title,Content } from 'native-base';


class TimerScreen extends Component{

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
                    <Right/>
                </Header>
                <Content>

                </Content>
            </Container>
        );
    }
}

export default TimerScreen;