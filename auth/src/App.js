import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAEiqNXvCQRAGk6C7L8jd9OsMnaasOO7Qg',
      authDomain: 'authentication-131a4.firebaseapp.com',
      databaseURL: 'https://authentication-131a4.firebaseio.com',
      projectId: 'authentication-131a4',
      storageBucket: 'authentication-131a4.appspot.com',
      messagingSenderId: '1022911314033',
      appId: '1:1022911314033:web:e008339538af5c1c7c43d0',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
