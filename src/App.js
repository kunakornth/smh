import React, { Component } from 'react';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import { Container, Button , Text, Spinner } from 'native-base';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router'


const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));

class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDE0xNvq3ftP5GN7QufGk3tssq2bJOi3DY",
            authDomain: "eiei-a776e.firebaseapp.com",
            databaseURL: "https://eiei-a776e.firebaseio.com",
            projectId: "eiei-a776e",
            storageBucket: "eiei-a776e.appspot.com",
            messagingSenderId: "944318312158"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn:true });
            }
            else{
                this.setState({ loggedIn:false });
            }
        });
    }



    render() {

        return (
            <Provider store={store}>
                <Container>
                    <Router />
                </Container>
            </Provider>
        );
    }
}

export default App;
