import * as React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import validator from 'validator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';
import {updateUserInfo} from '../../redux/actions';
import {theme} from '../../style/theme';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../utils';

// components
import InputField from '../../components/widgets/text-input';
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Wrapper = styled(SafeAreaView)`
  background-color: ${theme.colors.white};
  flex: 1;
`;

const ContentWrapper = styled.View`
  margin-top: 125px;
  align-items: flex-start;
  padding-horizontal: 16px;
`;

const HeaderText = styled.Text`
  color: ${theme.colors.black};
  font-family: Gelion-Bold;
  font-size: ${sizeScale(ms(20, 0.2), 'px')};
  line-height: 34px;
`;

const SubText = styled.Text`
  color: ${theme.colors.dark};
  font-size: ${sizeScale(ms(17, 0.2), 'px')};
  line-height: 22px;
  font-family: Gelion-Regular;
  margin-top: 12px;
  opacity: 0.8;
`;

const InputFieldsWrapper = styled.View`
  justify-content: space-between;
  margin-top: 5px;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  height: 55px;
  width: 100%;
  margin-top: 40px;
`;

const ValidationErrorMessage = styled.Text`
  color: red;
  line-height: 20px;
  font-family: Gelion-Regular;
  font-size: 14px;
  margin-top: 10px;
`;

const FieldWrapper = styled.View`
  width: 100%;
`;

const Login: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentField, setCurrentField] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');
  const [isEmailError, setIsEmailError] = React.useState<boolean>(true);
  const [isPasswordError, setIsPasswordError] = React.useState<boolean>(true);

  const handleValidation = (value: string) => {
    if (currentField === 'email') {
      handleEmailValidation(value);
    }
    if (currentField === 'password') {
      handlePasswordValidation(value);
    }
  };

  const handleEmailValidation = (value: string) => {
    if (!validator.isEmpty(value)) {
      if (!validator.isEmail(value)) {
        setIsEmailError(true);
        setEmailError('Please input a valid email address.');
      }
      if (validator.isEmail(value)) {
        setIsEmailError(false);
        setEmailError('');
        setEmail(value);
      }
    }
    if (validator.isEmpty(value)) {
      setIsEmailError(true);
      setEmailError('This field is required.');
    }
  };

  const handlePasswordValidation = (value: string) => {
    if (!validator.isEmpty(value)) {
      setIsPasswordError(false);
      setPasswordError('');
    }
    if (validator.isEmpty(value)) {
      setIsPasswordError(true);
      setPasswordError('This field is required.');
    }
  };

  const handelLogin = React.useCallback(() => {
    let setUserInfo: any;
    if (!isPasswordError && !isEmailError) {
      setLoading(true);
      setUserInfo = setTimeout(() => {
        setLoading(false);
        dispatch(updateUserInfo(true, email));
      }, 3000);
      return () => {
        clearTimeout(setUserInfo);
      };
    }
  }, [dispatch, email, isEmailError, isPasswordError]);

  return (
    <Wrapper>
      <StatusBar
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.white}
        animated={true}
        showHideTransition="slide"
      />
      <ContentWrapper>
        <HeaderText>Welcome back</HeaderText>
        <SubText>
          Let's get you logged in to get back to building your
          dollar-denominated investment portfolio.
        </SubText>
        <InputFieldsWrapper>
          <FieldWrapper>
            <InputField
              placeholder="Email Address"
              type="email"
              handleInputChange={handleValidation}
              onFocus={() => {
                setCurrentField('email');
              }}
            />
            {emailError.length >= 1 && (
              <ValidationErrorMessage>{emailError}</ValidationErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <InputField
              placeholder="Password"
              type="password"
              handleInputChange={handleValidation}
              onFocus={() => {
                setCurrentField('password');
              }}
            />
            {passwordError.length >= 1 && (
              <ValidationErrorMessage>{passwordError}</ValidationErrorMessage>
            )}
          </FieldWrapper>
        </InputFieldsWrapper>
        <ButtonWrapper>
          <ColoredButton
            disabled={loading || isPasswordError || isEmailError}
            isLoading={loading}
            onPress={handelLogin}>
            Sign In
          </ColoredButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;
