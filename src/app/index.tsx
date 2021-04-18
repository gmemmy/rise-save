import * as React from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import 'react-native-gesture-handler';
import Navigator from './navigator';
import Splash from '../screens/splash';
import BaseThemeProvider from '../init/styles';

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
