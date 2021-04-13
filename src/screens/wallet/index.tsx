/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';

// components
import WalletBalance from '../../components/template/wallet-balance';
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  padding-horizontal: 16px;
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
  return (
    <Container>
      <WalletBalanceWrapper>
        <WalletBalance />
        <ButtonsWrapper>
          <ColoredButton
            color={theme.colors.offTeal}
            style={{
              width: 163,
              height: 55,
            }}>
            Send Money
          </ColoredButton>
          <ColoredButton
            style={{
              width: 163,
              height: 55,
            }}>
            Fund Wallet
          </ColoredButton>
        </ButtonsWrapper>
      </WalletBalanceWrapper>
    </Container>
  );
};

export default Wallet;
