/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import validator from 'validator';
import {FormField} from '../../../interface';
import {theme} from '../../../style/theme';

// components
import TouchableItem from '../buttons/touchable-item';

// icons
import eye from '../../../../assets/icons/eye.png';

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

const Background = styled.View`
  flex: 1;
  opacity: 0.2;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  background-color: ${theme.colors.offTeal};
  border: 1px solid ${(props: any) => props.borderColor};
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

const ValidationErrorMessage = styled.Text`
  color: red;
  line-height: 20px;
  font-family: Gelion-Regular;
  font-size: 12px;
`;

const InputField = ({placeholder, type}: FormField) => {
  const [hide, setHide] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>('');
  const [isValidationError, setIsValidationError] = React.useState<boolean>(
    false,
  );
  const [validationError, setValidationError] = React.useState<string>('');

  const handleValidation = (field: string) => {
    if (!validator.isEmpty(value)) {
      if (field === 'email') {
        if (!validator.isEmail(value)) {
          setIsValidationError(true);
          setValidationError('Please input a valid email address.');
        } else if (validator.isEmail(value)) {
          setIsValidationError(false);
          setValidationError('');
        }
      } else {
        setIsValidationError(false);
        setValidationError('');
      }
    } else {
      setIsValidationError(true);
      setValidationError('This field is required.');
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Background borderColor={isValidationError ? 'red' : '#0898a0'} />
        <Input
          placeholder={placeholder}
          placeholderTextColor={theme.colors.dark}
          secureTextEntry={type === 'password' && hide}
          onChangeText={text => {
            setValue(text);
            handleValidation(type);
          }}
          value={value}
          onBlur={() => handleValidation(type)}
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
      </FormWrapper>
      {isValidationError && (
        <ValidationErrorMessage>{validationError}</ValidationErrorMessage>
      )}
    </Container>
  );
};

export default InputField;
