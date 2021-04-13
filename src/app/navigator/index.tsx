import * as React from 'react';
import 'react-native-gesture-handler';
import Navigator from '../navigator';
import BaseThemeProvider from '../../init/styles';

export const App = () => {
  return (
    <BaseThemeProvider>
      <Navigator token={true} />
    </BaseThemeProvider>
  );
};
