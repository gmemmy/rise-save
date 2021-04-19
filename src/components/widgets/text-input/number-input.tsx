/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {ms, vs} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {theme} from '../../../style/theme';
import {sizeScale} from '../../../utils';

const Input = styled.TextInput`
  font-family: Gelion-Bold;
  font-size: ${sizeScale(ms(22, 0.2), 'px')};
  color: ${theme.colors.dark};
  width: 100%;
`;

interface NumberInputProps {
  value: string;
  handleTextChange: (amount: string) => void;
  onFocus: () => void;
  textAlign: 'right';
}

const NumberInput = ({
  value,
  handleTextChange,
  onFocus,
  textAlign,
}: NumberInputProps): React.ReactElement => {
  return (
    <Input
      keyboardType="number-pad"
      maxLength={6}
      placeholder="0.00"
      placeholderTextColor={theme.colors.dark}
      onChangeText={handleTextChange}
      defaultValue={value}
      onFocus={onFocus}
      textAlign={textAlign}
      style={{
        paddingTop: 0,
        paddingBottom: 0,
        fontFamily: 'Gelion-Bold',
        fontSize: ms(22, 0.2),
        lineHeight: vs(28),
        color: theme.colors.dark,
        height: vs(28),
      }}
    />
  );
};

export default NumberInput;
