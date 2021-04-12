import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/auth/login';

const Stack = createStackNavigator();

const AuthApp = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthApp;
