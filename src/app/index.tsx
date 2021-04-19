import * as React from 'react';
import {Alert} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';
import 'react-native-gesture-handler';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import Navigator from './navigator';
import Splash from '../screens/splash';
import BaseThemeProvider from '../init/styles';

// error handler for JS errors and native errors that lead to app crash
const errorHandler = (e, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${
        e.message
      }. Please close the app and start again!`,
      [
        {
          text: 'Close',
        },
      ],
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler(errorString => {
  console.log('setNativeExceptionHandler', errorString);
});

export const App = () => {
  const isAuthenticated: boolean = useSelector(
    (state: any) => state.user.isAuthenticated,
    shallowEqual,
  );
  return (
    <BaseThemeProvider>
      <React.Suspense fallback={<Splash />}>
        <Navigator isAuthenticated={isAuthenticated} />
      </React.Suspense>
    </BaseThemeProvider>
  );
};
