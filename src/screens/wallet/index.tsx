/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {useNavigation} from '@react-navigation/native';

// components
import WalletBalance from '../../components/template/wallet-balance';
import ColoredButton from '../../components/widgets/buttons/colored-button';
import TransactionSummary from '../../components/template/transaction-summary';
import TouchableItem from '../../components/widgets/buttons/touchable-item';

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

const TransactionHistory = styled.FlatList`
  width: 100%;
  margin-top: 43px;
`;

const ListHeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const ListHeaderLeft = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-family: Gelion-Regular;
  color: ${theme.colors.dark};
`;

const ListHeaderRight = styled.Text`
  font-size: 11px;
  line-height: 13px;
  font-family: Gelion-Regular;
  color: ${theme.colors.defaultTeal};
`;

const renderTransaction = ({item}) => {
  return <TransactionSummary transaction={item} />;
};

const ListHeader = () => {
  return (
    <ListHeaderWrapper>
      <ListHeaderLeft>Recent Transactions</ListHeaderLeft>
      <TouchableItem>
        <ListHeaderRight>View All</ListHeaderRight>
      </TouchableItem>
    </ListHeaderWrapper>
  );
};

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
        <TransactionHistory
          data={[
            {
              id: '01',
              text: 'hello',
            },
            {
              id: '01',
              text: 'hello',
            },
            {
              id: '01',
              text: 'hello',
            },
            {
              id: '01',
              text: 'hello',
            },
          ]}
          renderItem={renderTransaction}
          ListHeaderComponent={<ListHeader />}
        />
      </WalletBalanceWrapper>
    </Container>
  );
};

export default Wallet;
