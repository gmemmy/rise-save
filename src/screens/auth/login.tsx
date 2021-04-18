import * as React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {Dispatch} from 'redux';
// import {useSelector, shallowEqual, useDispatch} from 'react-redux';
// import {updateUserInfo} from '../../redux/actions';
import {theme} from '../../style/theme';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../utils';
import {reduxForm} from 'redux-form';

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

const Login: React.FC = () => {
  // const dispatch: Dispatch<any> = useDispatch();
  // const [loading, setLoading] = React.useState<boolean>(false);

  // const validationError: any = useSelector(
  //   (state: any) => state.form.errors.validation,
  //   shallowEqual,
  // );

  // const handelLogin = React.useCallback(() => {
  //   let setUserInfo: any;
  //   // if (!validationError.hasError) {
  //   //   setLoading(true);
  //   //   setUserInfo = setTimeout(() => {
  //   //     setLoading(false);
  //   //     dispatch(updateUserInfo(true, 'atawodiemmanuel@gmail.com'));
  //   //   }, 3000);
  //   }
  //   // return () => {
  //   //   clearTimeout(setUserInfo);
  //   // };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
          <InputField placeholder="Email Address" type="email" />
          <InputField placeholder="Password" type="password" />
        </InputFieldsWrapper>
        <ButtonWrapper>
          <ColoredButton disabled={false} isLoading={false} onPress={() => {}}>
            Sign In
          </ColoredButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default reduxForm({
  form: 'fieldLevelValidation', // a unique identifier for this form
})(Login);
