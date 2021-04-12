/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import {FormField} from '../../../interface';
import {theme} from '../../../style/theme';

// components
import TouchableItem from '../buttons/touchable-item';

// icons
import eye from '../../../../assets/icons/eye.png';

const Wrapper = styled.View`
  height: 55px;
  width: 100%;
  justify-content: center;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`;

const Background = styled.View`
  flex: 1;
  opacity: 0.2;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  background-color: ${theme.colors.offTeal};
  border: 1px solid #0898a0;
`;

const Input = styled.TextInput`
  width: 90%;
  color: ${theme.colors.dark};
  font-family: Gelion-SemiBold;
  font-size: 17px;
  line-height: 22px;
  opacity: 0.8;
  position: absolute;
  padding-horizontal: 30px;
`;

const SecureIcon = styled.Image`
  resize-mode: contain;
  height: 15.74px;
  width: 23px;
`;

const InputField = ({placeholder, type}: FormField) => {
  const [hide, setHide] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');

  return (
    <Wrapper>
      <Background />
      <Input
        placeholder={placeholder}
        placeholderTextColor={theme.colors.dark}
        secureTextEntry={type === 'password' && hide}
        onChangeText={text => setValue(text)}
        value={value}
      />
      {type === 'password' && (
        <TouchableItem
          onPress={() => setHide(!hide)}
          style={{
            position: 'absolute',
            marginLeft: '90%',
          }}>
          <SecureIcon source={eye} />
        </TouchableItem>
      )}
    </Wrapper>
  );
};

export default InputField;
