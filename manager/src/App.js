import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDHaWXc_fcJx1Oy0Ce6pPEuIkKBnXbFCmw',
      authDomain: 'manager-ebebb.firebaseapp.com',
      databaseURL: 'https://manager-ebebb.firebaseio.com',
      projectId: 'manager-ebebb',
      storageBucket: 'manager-ebebb.appspot.com',
      messagingSenderId: '779241375764',
      appId: '1:779241375764:web:571bcf345f98cc9b4a7f01',
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
