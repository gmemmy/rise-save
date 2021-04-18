/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {vs, s, ms} from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import {useSelector, shallowEqual} from 'react-redux';
import Shimmer from 'react-native-shimmer';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils/index';

// Icon
const arrowRight = require('../../../assets/images/arrow-right.png');

// Components
import ColoredButton from '../../components/widgets/buttons/colored-button';
import TouchableItem from '../../components/widgets/buttons/touchable-item';
import NumberInput from '../../components/widgets/text-input/number-input';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

const ContentWrapper = styled.View`
  margin-top: ${sizeScale(vs(21), 'px')};
  width: 100%;
  align-items: center;
`;

const PaymentFormatContainer = styled.View`
  width: 100%;
  height: ${sizeScale(vs(61), 'px')};
  border-width: 1px;
  border-color: rgba(181, 181, 181, 0.2);
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${sizeScale(s(28), 'px')};
  position: relative;
`;

const HalfPaymentFormatContainer = styled.View<{align?: string}>`
  width: 50%;
  height: 100%
  justify-content: center;
  align-items: ${({align}) => align}
`;

const VerticalRule = styled.View`
  height: 100%;
  background-color: rgba(181, 181, 181, 0.2);
  width: 1px;
`;

const PaymentFormatContainerHeader = styled.Text`
  font-family: Gelion-Regular;
  font-size: ${sizeScale(ms(13, 0.2), 'px')};
  line-height: ${sizeScale(vs(18), 'px')};
  color: ${theme.colors.dark};
`;

const PaymentFormatContainerHeaderWrapper = styled.View`
  align-items: flex-start;
`;

const WalletBalance = styled.Text`
  color: ${theme.colors.grey};
  font-family: Gelion-Regular;
  line-height: ${sizeScale(vs(18), 'px')};
`;

const ArrowWrapper = styled.View`
  background-color: ${theme.colors.defaultTeal};
  width: ${sizeScale(ms(24, 0.3), 'px')};
  height: ${sizeScale(ms(24, 0.3), 'px')};
  border-radius: 50px;
  position: absolute;
  left: 56%;
  right: 54%;
  align-items: center;
  justify-content: center;
  elevation: 1;
`;

const CurrencyValueWrapper = styled.View`
  width: 100%;
  align-items: center;
  padding-vertical: ${sizeScale(vs(15), 'px')};
`;

const CurrencyValue = styled.View`
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
`;

const CurrencySymbol = styled.Text`
  font-family: Gelion-Bold;
  font-size: ${sizeScale(ms(22, 0.2), 'px')};
  line-height: ${sizeScale(vs(28), 'px')};
  color: ${theme.colors.dark};
`;

const RateContainer = styled.View`
  height: ${sizeScale(vs(27), 'px')};
  width: ${sizeScale(s(169), 'px')};
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.offTeal};
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 4px;
  padding-left: 18.1px;
  padding-right: 5.4px;
`;

const RateReasonWrapper = styled.View`
  height: 100%;
  width: 52%;
  background-color: ${theme.colors.offTeal};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const RateReasonText = styled.Text`
  color: ${theme.colors.defaultTeal};
  font-family: Gelion-Medium;
  font-size: 10px;
  line-height: 11px;
`;

const ButtonWrapper = styled.View`
  height: 36px;
  width: 281px;
  margin-top: 44.6px;
`;

const InputWrapper = styled.View`
  height: 100%;
  min-width: 16%;
`;

const AnimatedRateContainer = Animatable.createAnimatableComponent(
  RateContainer,
);

interface AddFundsProps {
  fundingSource: string;
  recepientSource: string;
  recepientBalance: string;
  type: string;
}

const AddFunds = ({
  fundingSource,
  recepientSource,
  recepientBalance,
  type,
}: AddFundsProps) => {
  const [nairaValue, setNairaValue] = React.useState<string>('');
  const [dollarValue, setDollarValue] = React.useState<string>('');
  const [focusedInput, setFocusedInput] = React.useState<string>('');
  const [buttonDisabled, setButtonDisabled] = React.useState<boolean>(true);

  const navigation = useNavigation();

  const walletBalance: string = useSelector(
    (state: any) => state.user.walletBalance,
    shallowEqual,
  );

  const handleTextChange = amount => {
    if (amount.length < 1) {
      setButtonDisabled(true);
      setDollarValue('');
      setNairaValue('');
    }

    if (amount.length >= 1 && parseFloat(amount) > 0) {
      // if the user wants to fund their plan
      // check if the inputed amount is less than the user's current wallet balance and
      // if it is true, disable the button and send an error message else, enable the button

      if (type === 'plan') {
        setInputValue(amount);
        if (
          amount.length >= 1 &&
          parseFloat(amount) > parseFloat(walletBalance)
        ) {
          Toast.showWithGravity(
            'Your wallet balance is too low to fund this plan. Please fund your wallet.',
            500,
            Toast.TOP,
          );
          setButtonDisabled(true);
        } else {
          setButtonDisabled(false);
        }
      }

      if (type === 'wallet') {
        if (amount.length >= 1) {
          setInputValue(amount);
          setButtonDisabled(false);
        }
      }
    }
  };

  const setInputValue = value => {
    const formattedAmount = parseFloat(value);
    let newValue;
    if (focusedInput === 'naira') {
      newValue = formattedAmount / 420;
      setDollarValue(newValue.toFixed(2));
      setNairaValue(value);
    }
    if (focusedInput === 'dollar') {
      newValue = formattedAmount * 420;
      setNairaValue(newValue.toFixed(2));
      setDollarValue(value);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <PaymentFormatContainer>
          <HalfPaymentFormatContainer align="flex-start">
            <PaymentFormatContainerHeaderWrapper>
              <PaymentFormatContainerHeader>
                {fundingSource}
              </PaymentFormatContainerHeader>
              {type === 'plan' && (
                <PaymentFormatContainerHeader>
                  ${walletBalance}
                </PaymentFormatContainerHeader>
              )}
            </PaymentFormatContainerHeaderWrapper>
          </HalfPaymentFormatContainer>
          <VerticalRule />
          <ArrowWrapper>
            <Shimmer animating intensity={1}>
              <FastImage
                source={arrowRight}
                resizeMode={FastImage.resizeMode.contain}
                style={{
                  height: 14,
                  width: 14,
                }}
              />
            </Shimmer>
          </ArrowWrapper>
          <HalfPaymentFormatContainer align="flex-end">
            <PaymentFormatContainerHeader>
              {recepientSource}
            </PaymentFormatContainerHeader>
            <WalletBalance>{recepientBalance}</WalletBalance>
          </HalfPaymentFormatContainer>
        </PaymentFormatContainer>
        <CurrencyValueWrapper>
          <CurrencyValue>
            <CurrencySymbol>₦</CurrencySymbol>
            <InputWrapper>
              <NumberInput
                onFocus={() => setFocusedInput('naira')}
                handleTextChange={handleTextChange}
                value={nairaValue}
              />
            </InputWrapper>
          </CurrencyValue>
          <TouchableItem>
            <AnimatedRateContainer animation="bounce">
              <WalletBalance>1 $ = ₦420</WalletBalance>
              <RateReasonWrapper>
                <RateReasonText>Why this rate?</RateReasonText>
              </RateReasonWrapper>
            </AnimatedRateContainer>
          </TouchableItem>
          <CurrencyValue>
            <CurrencySymbol>$</CurrencySymbol>
            <InputWrapper>
              <NumberInput
                onFocus={() => setFocusedInput('dollar')}
                handleTextChange={handleTextChange}
                value={dollarValue}
              />
            </InputWrapper>
          </CurrencyValue>
        </CurrencyValueWrapper>
        <ButtonWrapper>
          <ColoredButton
            disabled={buttonDisabled}
            isLoading={false}
            onPress={() => {
              navigation.navigate('Confirm Amount', {
                nairaValue,
                dollarValue,
                balanceToFund: recepientBalance,
                type,
              });
            }}>
            Add Money
          </ColoredButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default AddFunds;
