import * as React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import cardsy from 'cardsy';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
  updateWalletBalance,
  updateTransactionHistory,
} from '../../redux/actions';
import {Dispatch} from 'redux';
import {theme} from '../../style/theme';
import {commaAppend, sizeScale} from '../../utils';
import {vs} from 'react-native-size-matters';
import {FundingRoute} from '../../interface';

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

const AddPaymentMethod: React.FC = (): React.ReactElement => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [type, setType] = React.useState<string>('');
  const [cardNum, setCardNum] = React.useState<string>('');
  const [expDate, setExpDate] = React.useState<string>('');
  const [cvv, setCvv] = React.useState<string>('');
  const [isValidationError, setIsValidationError] = React.useState<boolean>(
    true,
  );
  const navigation = useNavigation();
  const route: FundingRoute = useRoute();
  const dispatch: Dispatch<any> = useDispatch();

  const {nairaValue, dollarValue, id} = route.params;
  const fundingType = route.params.type;

  const walletBalance: string = useSelector(
    (state: any) => state.user.walletBalance,
    shallowEqual,
  );

  const handleValidation = (text: string) => {
    switch (type) {
      case 'card-number':
        setCardNum(cardsy.format.number(text));
        break;
      case 'card-cvv':
        setCvv(cardsy.format.cvc(text));
        break;
      case 'card-expiry-number':
        setExpDate(cardsy.format.expiryString(text, '/'));
        break;
      default:
        text;
        break;
    }
    if (cardNum.length >= 1 && cvv.length >= 1 && expDate.length >= 1) {
      setIsValidationError(false);
    }
  };

  const handleAddFunds = () => {
    setLoading(true);

    if (fundingType === 'wallet') {
      const amountToFund = parseFloat(dollarValue) + parseFloat(walletBalance);

      dispatch(updateWalletBalance(JSON.stringify(amountToFund)));
      dispatch(
        updateTransactionHistory(
          id,
          'Deposit',
          new Date().toDateString(),
          dollarValue,
        ),
      );
    }
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Payment Successful', {
        amount: dollarValue,
        type: fundingType,
      });
    }, 1000);
  };

  return (
    <Container>
      <ContentWrapper>
        <CardNumberInputWrapper>
          <InputField
            placeholder="Card Number"
            type="card-number"
            handleInputChange={handleValidation}
            onFocus={() => {
              setType('card-number');
            }}
            keyboardType="number-pad"
            value={cardNum}
          />
        </CardNumberInputWrapper>
        <ContentBottomWrapper>
          <ContentBottomInputWrapper>
            <InputField
              placeholder="MM/YY"
              type="card-expiry-number"
              handleInputChange={handleValidation}
              onFocus={() => {
                setType('card-expiry-number');
              }}
              keyboardType="number-pad"
              value={expDate}
            />
          </ContentBottomInputWrapper>
          <ContentBottomInputWrapper>
            <InputField
              placeholder="CVV"
              type="card-cvv"
              handleInputChange={handleValidation}
              onFocus={() => {
                setType('card-cvv');
              }}
              keyboardType="number-pad"
              value={cvv}
            />
          </ContentBottomInputWrapper>
        </ContentBottomWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <ColoredButton
          disabled={loading || isValidationError}
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
