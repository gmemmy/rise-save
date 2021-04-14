import * as React from 'react';
import {ms, vs, s} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils';

// Components
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  padding-horizontal: ${sizeScale(s(24), 'px')};
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
  font-size: ${sizeScale(ms(40, 0.3), 'px')};
  line-height: ${sizeScale(vs(48), 'px')};
`;

const CurrencySymbol = styled.Text`
  font-size: ${sizeScale(ms(20, 0.3), 'px')};
`;

const AllDetailsWrapper = styled.View`
  margin-top: ${sizeScale(vs(13), 'px')};
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
  font-size: ${sizeScale(ms(15, 0.2), 'px')};
  line-height: ${sizeScale(vs(20), 'px')};
`;

const DetailsValue = styled.Text`
  color: ${theme.colors.dark};
  font-family: Gelion-Regular;
  font-size: ${sizeScale(ms(15, 0.2), 'px')};
  line-height: ${sizeScale(vs(20), 'px')};
`;

const HorizontalRuler = styled.View`
  height: 1px;
  background-color: rgba(181, 181, 181, 0.2);
  width: 100%;
  margin-top: ${sizeScale(vs(13), 'px')};
`;

const ButtonWrapper = styled.View`
  height: 55px;
  width: 368px;
  margin-top: auto;
  margin-bottom: ${sizeScale(vs(39), 'px')};
`;

const ConfirmAmount = () => {
  const navigation = useNavigation();

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
        <ColoredButton
          disabled={false}
          isLoading={false}
          onPress={() => {
            navigation.navigate('Choose Naira Card');
          }}>
          Add ₦4,263
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ConfirmAmount;
