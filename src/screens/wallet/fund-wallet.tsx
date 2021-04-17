/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import {useSelector, shallowEqual} from 'react-redux';
import Addfunds from '../../components/template/add-funds';
import {theme} from '../../style/theme';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

const FundWallet: React.FC = (): React.ReactElement => {
  const walletBalance: string = useSelector(
    (state: any) => state.user.walletBalance,
    shallowEqual,
  );
  return (
    <Container>
      <Addfunds
        fundingSource="Your Debit Card"
        recepientSource="Rise Wallet"
        recepientBalance={walletBalance}
        type="wallet"
      />
    </Container>
  );
};

export default FundWallet;
