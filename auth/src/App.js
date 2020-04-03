import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAEiqNXvCQRAGk6C7L8jd9OsMnaasOO7Qg',
      authDomain: 'authentication-131a4.firebaseapp.com',
      databaseURL: 'https://authentication-131a4.firebaseio.com',
      projectId: 'authentication-131a4',
      storageBucket: 'authentication-131a4.appspot.com',
      messagingSenderId: '1022911314033',
      appId: '1:1022911314033:web:e008339538af5c1c7c43d0',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Button>Log Out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
