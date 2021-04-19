/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StatusBar, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {useNavigation} from '@react-navigation/native';
import {shallowEqual, useSelector} from 'react-redux';
import {generateRandomNum} from '../../utils';

// components
import WalletBalance from '../../components/template/wallet-balance';
import ColoredButton from '../../components/widgets/buttons/colored-button';
import TransactionSummary from '../../components/template/transaction-summary';
import TouchableItem from '../../components/widgets/buttons/touchable-item';
import {TransactionItem} from '../../interface';

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
  background-color: ${theme.colors.white};
`;

const ListHeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const ListHeaderLeft = styled.Text`
  font-size: 16px;
  line-height: 20px;
  font-family: Gelion-Regular;
  color: ${theme.colors.dark};
`;

const ListHeaderRight = styled.Text`
  font-size: 12px;
  line-height: 13px;
  font-family: Gelion-Regular;
  color: ${theme.colors.defaultTeal};
`;

const NoLIstContentMessage = styled.Text`
  color: ${theme.colors.grey};
  margin-top: 30px;
  font-family: Gelion-Regular;
  font-size: 15px;
`;

const renderTransaction = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <TransactionSummary key={generateRandomNum()} transaction={item} />
    </TouchableWithoutFeedback>
  );
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

const EmptyList = () => {
  return (
    <NoLIstContentMessage>
      You do not have any recent transactions.
    </NoLIstContentMessage>
  );
};

const Wallet = () => {
  const navigation = useNavigation();
  const transactionHistory: TransactionItem[] = useSelector(
    (state: any) => state.transaction.transactions,
    shallowEqual,
  );

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
            onPress={() => navigation.navigate('Plans')}
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
      <TransactionHistory
        data={transactionHistory}
        renderItem={renderTransaction}
        ListHeaderComponent={<ListHeader />}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={() => generateRandomNum()}
      />
    </Container>
  );
};

export default Wallet;
