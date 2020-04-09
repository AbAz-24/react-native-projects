import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('manager', () => App);

YellowBox.ignoreWarnings(['Remote debugger', 'Setting a timer']);
