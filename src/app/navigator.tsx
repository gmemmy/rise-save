import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AuthApp from './navigator/auth';
import MainApp from './navigator/app';

const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    background: '#fff',
  },
};

export function Navigator({isAuthenticated}: {isAuthenticated: boolean}) {
  React.useLayoutEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {!isAuthenticated ? <AuthApp /> : <MainApp />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigator;
