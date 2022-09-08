/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {makeServer} from './src/server';

// Call make Server
makeServer();

AppRegistry.registerComponent(appName, () => App);
