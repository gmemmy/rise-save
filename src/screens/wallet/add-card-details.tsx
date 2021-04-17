import * as React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {updateWalletBalance, updatePlanBalance} from '../../redux/actions';
import {Dispatch} from 'redux';
import {theme} from '../../style/theme';
import {commaAppend, sizeScale} from '../../utils';
import {vs} from 'react-native-size-matters';

// Components
import InputField from '../../components/widgets/text-input';
import ColoredButton from '../../components/widgets/buttons/colored-button';
import {FundingRoute} from '../../interface';

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

const AddPaymentMethod: React.FC = (): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigation = useNavigation();
  const route: FundingRoute = useRoute();
  const dispatch: Dispatch<any> = useDispatch();

  const {nairaValue, dollarValue, balanceToFund, type} = route.params;

  const walletBalance: string = useSelector(
    (state: any) => state.user.walletBalance,
    shallowEqual,
  );

  const handleAddFunds = () => {
    setLoading(true);
    let amountToFund;

    if (type === 'wallet') {
      // set the amount to add to the wallet to be the old wallet amount plus the specifed
      // amount to add
      amountToFund = parseFloat(dollarValue) + parseFloat(walletBalance);
      dispatch(updateWalletBalance(JSON.stringify(amountToFund)));
    }
    if (type === 'plan') {
      // deduct amount to add to plan from current wallet balance
      const newWalletBalance =
        parseFloat(walletBalance) - parseFloat(dollarValue);

      // update the wallet balance with the new amount bar the plan deduction
      // update the plan balance to have the specified amount
      dispatch(updateWalletBalance(JSON.stringify(newWalletBalance)));
      dispatch(updatePlanBalance(JSON.stringify(dollarValue), '01'));
    }
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Payment Successful', {amount: dollarValue});
    }, 1000);
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
            handleAddFunds();
          }}>
          Add ₦{commaAppend(nairaValue)}
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default AddPaymentMethod;
