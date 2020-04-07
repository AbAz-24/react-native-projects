import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDHaWXc_fcJx1Oy0Ce6pPEuIkKBnXbFCmw',
      authDomain: 'manager-ebebb.firebaseapp.com',
      databaseURL: 'https://manager-ebebb.firebaseio.com',
      projectId: 'manager-ebebb',
      storageBucket: 'manager-ebebb.appspot.com',
      messagingSenderId: '779241375764',
      appId: '1:779241375764:web:571bcf345f98cc9b4a7f01',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
