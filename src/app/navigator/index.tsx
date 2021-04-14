import * as React from 'react';
import 'react-native-gesture-handler';
import Navigator from '../navigator';
import Splash from '../../screens/splash';
import BaseThemeProvider from '../../init/styles';

export const App = () => {
  return (
    <BaseThemeProvider>
      <React.Suspense fallback={<Splash />}>
        <Navigator token={true} />
      </React.Suspense>
    </BaseThemeProvider>
  );
};
