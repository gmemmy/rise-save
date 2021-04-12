import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParameterList = {
  Login: undefined;
};

export type AuthScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  'Login'
>;
