import {theme} from '../style/theme';
import {TextInputProps, ViewProps} from 'react-native';

type Theme = typeof theme;
export type Colors = keyof Theme['colors'];
export type Fonts = keyof Theme['font'];

export interface FormField extends TextInputProps {
  type: string;
  placeholder: string;
}

export interface TouchableProps extends ViewProps {
  disabled?: boolean;
  delayPressIn?: number;
  onPress?: () => void;
  children: React.ReactNode;
}
