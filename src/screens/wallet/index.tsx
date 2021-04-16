/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {useNavigation} from '@react-navigation/native';

// components
import WalletBalance from '../../components/template/wallet-balance';
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  padding-horizontal: 16px;
  height: 100%;
`;

const WalletBalanceWrapper = styled.View`
  margin-top: 20px;
`;

const ButtonsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.white}
        animated={true}
        showHideTransition="slide"
      />
      <WalletBalanceWrapper>
        <WalletBalance />
        <ButtonsWrapper>
          <ColoredButton
            color={theme.colors.offTeal}
            onPress={() => navigation.navigate('Plans', {screen: 'Plans'})}
            style={{
              width: 180,
              height: 55,
            }}>
            Send Money
          </ColoredButton>
          <ColoredButton
            style={{
              width: 180,
              height: 55,
            }}
            onPress={() => navigation.navigate('Debit Card')}>
            Fund Wallet
          </ColoredButton>
        </ButtonsWrapper>
      </WalletBalanceWrapper>
    </Container>
  );
};

export default Wallet;
