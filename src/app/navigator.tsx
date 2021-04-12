import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
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

export function Navigator({token}: {token: boolean}) {
  console.log(token);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {!token ? <AuthApp /> : <MainApp />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigator;
