import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParameterList = {
  Login: undefined;
  Wallet: undefined;
  FundWallet: undefined;
};

export type AuthScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  'Login'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParameterList,
  'Wallet' | 'FundWallet'
>;
