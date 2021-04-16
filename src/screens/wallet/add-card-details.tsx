import * as React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {updateWalletBalance} from '../../redux/actions';
import {Dispatch} from 'redux';
import {theme} from '../../style/theme';
import {commaAppend, sizeScale} from '../../utils';
import {vs} from 'react-native-size-matters';

// Components
import InputField from '../../components/widgets/text-input';
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  align-items: center;
`;

const ContentWrapper = styled.View`
  padding-horizontal: 16px;
  width: 100%;
  margin-top: 30px;
`;

const CardNumberInputWrapper = styled.View`
  height: 44px;
  width: 100%;
`;

const ContentBottomWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
`;

const ContentBottomInputWrapper = styled.View`
  width: 48%;
  height: 44px;
`;

const ButtonWrapper = styled.View`
  height: 55px;
  width: 368px;
  margin-top: auto;
  margin-bottom: ${sizeScale(vs(39), 'px')};
`;

interface Route {
  key: string;
  name: string;
  params: {
    nairaValue: string;
    dollarValue: string;
  };
}

const AddPaymentMethod: React.FC = (): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigation = useNavigation();
  const route: Route = useRoute();
  const dispatch: Dispatch<any> = useDispatch();

  const {nairaValue, dollarValue} = route.params;

  const walletBalance: string = useSelector(
    (state: any) => state.user.walletBalance,
    shallowEqual,
  );

  const handleWalletUpdate = () => {
    setLoading(true);

    const amountToAddToWallet =
      parseFloat(dollarValue) + parseFloat(walletBalance);

    dispatch(updateWalletBalance(JSON.stringify(amountToAddToWallet)));
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Payment Successful', {amount: dollarValue});
    });
  };

  return (
    <Container>
      <ContentWrapper>
        <CardNumberInputWrapper>
          <InputField placeholder="Card Number" type="card-number" />
        </CardNumberInputWrapper>
        <ContentBottomWrapper>
          <ContentBottomInputWrapper>
            <InputField placeholder="MM/YY" type="card-expiry-number" />
          </ContentBottomInputWrapper>
          <ContentBottomInputWrapper>
            <InputField placeholder="CVV" type="card-cvv" />
          </ContentBottomInputWrapper>
        </ContentBottomWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <ColoredButton
          disabled={loading}
          isLoading={loading}
          onPress={() => {
            handleWalletUpdate();
          }}>
          Add ₦{commaAppend(nairaValue)}
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default AddPaymentMethod;
