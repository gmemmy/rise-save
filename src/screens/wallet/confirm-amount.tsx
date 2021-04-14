import * as React from 'react';
import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils';

// Components
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  padding-horizontal: 25px;
  align-items: center;
`;

const ContentWrapper = styled.View`
  margin-top: ${sizeScale(vs(32), 'px')};
  width: 100%;
  align-items: center;
`;

const AmountToDeposit = styled.Text`
  color: ${theme.colors.dark};
  font-family: Gelion-Bold;
  font-size: 40px;
  line-height: 48px;
`;

const CurrencySymbol = styled.Text`
  font-size: 20px;
`;

const AllDetailsWrapper = styled.View`
  margin-top: 13px;
  align-items: center;
  width: 100%;
`;

const DetailsContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 13px;
`;

const DetailsTitle = styled.Text`
  color: ${theme.colors.grey};
  font-family: Gelion-Regular;
  font-size: 15px;
  line-height: 20px;
`;

const DetailsValue = styled.Text`
  color: ${theme.colors.dark};
  font-family: Gelion-Regular;
  font-size: 15px;
  line-height: 20px;
`;

const HorizontalRuler = styled.View`
  height: 1px;
  background-color: rgba(181, 181, 181, 0.2);
  width: 100%;
  margin-top: 13px;
`;

const ButtonWrapper = styled.View`
  height: 55px;
  width: 308px;
  margin-top: auto;
  margin-bottom: 39px;
`;

const ConfirmAmount = () => {
  return (
    <Container>
      <ContentWrapper>
        <AmountToDeposit>
          <CurrencySymbol>₦</CurrencySymbol>
          {''}
          4,263.00
        </AmountToDeposit>
        <AllDetailsWrapper>
          <DetailsContainer>
            <DetailsTitle>Amount added to wallet</DetailsTitle>
            <DetailsValue>₦4,200.00</DetailsValue>
          </DetailsContainer>
          <HorizontalRuler />
          <DetailsContainer>
            <DetailsTitle>Processing fee (1.5%)</DetailsTitle>
            <DetailsValue>₦63.00</DetailsValue>
          </DetailsContainer>
          <HorizontalRuler />
          <DetailsContainer>
            <DetailsTitle>Amount in USD</DetailsTitle>
            <DetailsValue>$10.00</DetailsValue>
          </DetailsContainer>
          <HorizontalRuler />
        </AllDetailsWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <ColoredButton disabled={false} isLoading={false} onPress={() => {}}>
          Add Money
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ConfirmAmount;
