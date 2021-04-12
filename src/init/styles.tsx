import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from '../style/theme';

const BaseThemeProvider = (props: {children: any}) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default BaseThemeProvider;
