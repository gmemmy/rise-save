import * as React from 'react';
import {ms, vs, s} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../../style/theme';
import {sizeScale, commaAppend} from '../../utils';

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

interface Route {
  key: string;
  name: string;
  params: {
    nairaValue: string;
    dollarValue: string;
  };
}

const ConfirmAmount = () => {
  const navigation = useNavigation();
  const route: Route = useRoute();
  const nairaValue = parseFloat(route.params.nairaValue).toFixed(2);
  const dollarValue = parseFloat(route.params.dollarValue).toFixed(2);

  const processingFee = (1.5 / 100) * parseFloat(nairaValue);

  return (
    <Container>
      <ContentWrapper>
        <AmountToDeposit>
          <CurrencySymbol>₦</CurrencySymbol>
          {''}
          {commaAppend(nairaValue)}
        </AmountToDeposit>
        <AllDetailsWrapper>
          <DetailsContainer>
            <DetailsTitle>Amount added to wallet</DetailsTitle>
            <DetailsValue>₦{commaAppend(nairaValue)}</DetailsValue>
          </DetailsContainer>
          <HorizontalRuler />
          <DetailsContainer>
            <DetailsTitle>Processing fee (1.5%)</DetailsTitle>
            <DetailsValue>
              ₦{commaAppend(processingFee.toFixed(2))}
            </DetailsValue>
          </DetailsContainer>
          <HorizontalRuler />
          <DetailsContainer>
            <DetailsTitle>Amount in USD</DetailsTitle>
            <DetailsValue>${commaAppend(dollarValue)}</DetailsValue>
          </DetailsContainer>
          <HorizontalRuler />
        </AllDetailsWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <ColoredButton
          disabled={false}
          isLoading={false}
          onPress={() => {
            navigation.navigate('Choose Naira Card', {nairaValue, dollarValue});
          }}>
          Add ₦{commaAppend(nairaValue)}
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ConfirmAmount;
