import React from 'react';
import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {App} from '../app';
import {name as appName} from '../../app.json';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

enableScreens();

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
