import {theme} from '../style/theme';
import {TextInputProps, ViewProps} from 'react-native';

type Theme = typeof theme;
export type Colors = keyof Theme['colors'];
export type Fonts = keyof Theme['font'];

export interface FormField extends TextInputProps {
  type: string;
  placeholder: string;
  handleInputChange: (value: string) => void;
  inputValue?: string;
  onFocus: () => void;
  keyboadrdType?: string;
  value?: string;
}

export interface TouchableProps extends ViewProps {
  disabled?: boolean;
  delayPressIn?: number;
  onPress?: () => void;
  children: React.ReactNode;
}

export interface CurrentPlan {
  balance: string;
  id: string;
  title: string;
}

export interface FundingRoute {
  key: string;
  name: string;
  params: {
    amount: string;
    id: string;
    title: string;
    balanceToFund: string;
    type: string;
    nairaValue: string;
    dollarValue: string;
    planId?: string;
  };
}

export interface TransactionItem {
  title: string;
  date: string;
  amount: string;
}
