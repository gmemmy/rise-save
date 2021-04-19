/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import {FormField} from '../../../interface';
import {theme} from '../../../style/theme';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../../utils';

// components
import TouchableItem from '../buttons/touchable-item';

// icons
import EyeIcon from '../../icons/eye';

const Container = styled.View`
  width: 100%;
  margin-top: 20px;
`;

const FormWrapper = styled.View`
  width: 100%;
  justify-content: center;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`;

const Background = styled.View<{borderColor?: string}>`
  flex: 1;
  opacity: 0.2;
  width: 100%;
  border-radius: 5px;
  height: 55px;
  background-color: ${theme.colors.offTeal};
  border: 1px solid ${(props: any) => props.borderColor};
`;

const Input = styled.TextInput`
  width: 90%;
  color: ${theme.colors.dark};
  font-family: Gelion-SemiBold;
  font-size: ${sizeScale(ms(17, 0.2), 'px')};
  line-height: 22px;
  opacity: 0.8;
  position: absolute;
  padding-horizontal: 30px;
`;

const InputField = ({
  type,
  placeholder,
  handleInputChange,
  onFocus,
  keyboardType,
  value,
}: FormField) => {
  const [hide, setHide] = React.useState<boolean>(false);

  return (
    <Container>
      <FormWrapper>
        <Background borderColor="#0898a0" />
        <Input
          placeholder={placeholder}
          placeholderTextColor={theme.colors.dark}
          secureTextEntry={type === 'password' && hide}
          onChangeText={text => handleInputChange(text)}
          onFocus={onFocus}
          keyboardType={keyboardType}
          value={value}
        />
        {type === 'password' && (
          <TouchableItem
            onPress={() => setHide(!hide)}
            style={{
              position: 'absolute',
              marginLeft: '90%',
            }}>
            <EyeIcon fill={theme.colors.defaultTeal} width={23} height={23} />
          </TouchableItem>
        )}
      </FormWrapper>
    </Container>
  );
};

export default InputField;
