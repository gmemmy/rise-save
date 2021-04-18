import * as React from 'react';
import {ms} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {theme} from '../../../style/theme';
import {sizeScale} from '../../../utils';

const Input = styled.TextInput`
  font-family: Gelion-Bold;
  font-size: ${sizeScale(ms(22, 0.2), 'px')};
  color: ${theme.colors.dark};
  width: 100%;
`;

const NumberInput = ({
  value,
  handleTextChange,
  onFocus,
}: any): React.ReactElement => {
  return (
    <Input
      keyboardType="number-pad"
      maxLength={10}
      placeholder="0.00"
      placeholderTextColor={theme.colors.dark}
      onChangeText={handleTextChange}
      defaultValue={value}
      onFocus={onFocus}
    />
  );
};

export default NumberInput;
