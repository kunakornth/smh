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
            apiKey: "AIzaSyCTkrmLf5Vlo42b0UatXJd56Nm5I0GB3-4",
            authDomain: "crisis-c5907.firebaseapp.com",
            databaseURL: "https://crisis-c5907.firebaseio.com",
            projectId: "crisis-c5907",
            storageBucket: "crisis-c5907.appspot.com",
            messagingSenderId: "891674945825"
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
