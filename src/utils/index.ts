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

export const commaAppend = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const parseMoneyValue = (value: number) => {
  const stringValue = JSON.stringify(value);
  const dec = stringValue.split('.')[1];
  const decLength = dec && dec.length > 2 ? dec.length : 2;
  return Number(value).toFixed(decLength);
};

export const generateRandomNum = () =>
  JSON.stringify(Math.floor(Math.random() * 1001));
