/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'reflect-metadata';
import 'react-native-gesture-handler';

import HeadlessWrapper from './src/HeadlessWrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HeadlessWrapper);
