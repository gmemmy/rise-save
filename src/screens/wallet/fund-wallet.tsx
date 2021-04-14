/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {vs, s, ms} from 'react-native-size-matters';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils/index';

// Icon
const arrowRight = require('../../../assets/images/arrow-right.png');

// Components
import ColoredButton from '../../components/widgets/buttons/colored-button';

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
  padding-vertical: ${sizeScale(vs(15), 'px')};
  padding-horizontal: ${sizeScale(s(28), 'px')};
  align-items: center;
`;

const CurrencyValue = styled.View`
  flex-direction: row;
  width: 100%;
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
  width: 79px;
  background-color: ${theme.colors.offTeal};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const RateReasonText = styled.Text`
  color: ${theme.colors.defaultTeal};
  font-family: Gelion-Medium;
  font-size: 9px;
  line-height: 11px;
`;

const ButtonWrapper = styled.View`
  height: 36px;
  width: 281px;
  margin-top: 44.6px;
`;

const FundWallet = () => {
  return (
    <Container>
      <ContentWrapper>
        <PaymentFormatContainer>
          <HalfPaymentFormatContainer align="flex-start">
            <PaymentFormatContainerHeader>
              Your Debit Card
            </PaymentFormatContainerHeader>
          </HalfPaymentFormatContainer>
          <VerticalRule />
          <ArrowWrapper>
            <FastImage
              source={arrowRight}
              resizeMode={FastImage.resizeMode.contain}
              style={{
                height: 14,
                width: 14,
              }}
            />
          </ArrowWrapper>
          <HalfPaymentFormatContainer align="flex-end">
            <PaymentFormatContainerHeader>
              Rise Wallet
            </PaymentFormatContainerHeader>
            <WalletBalance>$20.34</WalletBalance>
          </HalfPaymentFormatContainer>
        </PaymentFormatContainer>
        <CurrencyValueWrapper>
          <CurrencyValue>
            <CurrencySymbol>₦</CurrencySymbol>
            <CurrencySymbol>4,200.00</CurrencySymbol>
          </CurrencyValue>
          <RateContainer>
            <WalletBalance>1 $ = ₦420</WalletBalance>
            <RateReasonWrapper>
              <RateReasonText>Why this rate?</RateReasonText>
            </RateReasonWrapper>
          </RateContainer>
          <CurrencyValue>
            <CurrencySymbol>$</CurrencySymbol>
            <CurrencySymbol>10.00</CurrencySymbol>
          </CurrencyValue>
        </CurrencyValueWrapper>
        <ButtonWrapper>
          <ColoredButton disabled={false} isLoading={false} onPress={() => {}}>
            Add Money
          </ColoredButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default FundWallet;
