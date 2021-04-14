import {ThemedStyledProps, DefaultTheme} from 'styled-components';

import {Fonts} from '../interface';

type MapFontFromTheme = <T>(
  font: Fonts,
) => (props: ThemedStyledProps<T, DefaultTheme>) => string;

export const getFontFromTheme: MapFontFromTheme = (font: Fonts) => {
  return (props): string => props.theme.font[font];
};

const Scaler = {
  px: 'px',
  '%': '%',
};

export const sizeScale = (size: number, scale: keyof typeof Scaler) =>
  `${size}${scale}`;
