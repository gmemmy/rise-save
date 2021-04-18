/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {ms} from 'react-native-size-matters';
import {useSelector, shallowEqual} from 'react-redux';
import {commaAppend, sizeScale} from '../../utils';

// Icon
import Eye from '../icons/eye';
const wallet = require('../../../assets/images/wallet.png');

// Components
import TouchableItem from '../widgets/buttons/touchable-item';

const Container = styled.View`
  width: 100%;
  height: 118px;
  background: rgba(131, 143, 145, 0.05);
  border-radius: 8px;
  overflow: hidden;
`;

const BalanceWrapper = styled.View`
  width: 100%;
  flex: 0.8;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 22px;
  padding-right: 26px;
`;

const BalanceAndTitleWrapper = styled.View`
  padding-top: 16px;
  align-items: flex-start;
`;

const BalanceTitleAndIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BalanceTitle = styled.Text`
  font-size: ${sizeScale(ms(12, 0.2), 'px')};
  line-height: 13px;
  font-family: Gelion-Regular;
  color: ${theme.colors.grey};
  padding-right: 10px;
  padding-left: 3px;
`;

const Amount = styled.Text`
  font-weight: 600;
  font-size: ${sizeScale(ms(22, 0.2), 'px')};
  line-height: 28px;
  color: ${theme.colors.dark};
  font-family: Gelion-Medium;
  top: 6px;
`;

const WalletIconWrapper = styled.View`
  margin-top: 33px;
  height: 24px;
  width: 27.39px;
`;

const WalletIcon = styled.Image`
  height: 24px;
  width: 31px;
  resize-mode: contain;
`;

const ContainerBottomWrapper = styled.View`
  width: 100%;
  height: 32px;
  background-color: ${theme.colors.offTeal};
  margin-top: auto;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ContainerBottomWrapperText = styled.Text`
  color: ${theme.colors.defaultTeal};
  text-align: center;
  font-family: Gelion-SemiBold;
  line-height: 13px;
  font-size: ${sizeScale(ms(11, 0.2), 'px')};
`;

const WalletBalance: React.FC = (): React.ReactElement => {
  const [isBalanceShown, setIsBalanceShown] = React.useState<boolean>(true);
  const walletBalance: string = useSelector(
    (state: any) => state.user.walletBalance,
    shallowEqual,
  );

  return (
    <Container>
      <BalanceWrapper>
        <BalanceAndTitleWrapper>
          <BalanceTitleAndIcon>
            <BalanceTitle>Wallet Balance</BalanceTitle>
            <TouchableItem
              style={{
                width: 30,
                height: 30,
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
              onPress={() => setIsBalanceShown(!isBalanceShown)}>
              <Eye fill={theme.colors.defaultTeal} height={16} width={16} />
            </TouchableItem>
          </BalanceTitleAndIcon>
          <Amount>
            {isBalanceShown ? `$${commaAppend(walletBalance)}` : '**********'}
          </Amount>
        </BalanceAndTitleWrapper>
        <WalletIconWrapper>
          <WalletIcon source={wallet} />
        </WalletIconWrapper>
      </BalanceWrapper>
      <ContainerBottomWrapper>
        <TouchableItem
          style={{
            width: '100%',
          }}>
          <ContainerBottomWrapperText>
            View Account Numbers
          </ContainerBottomWrapperText>
        </TouchableItem>
      </ContainerBottomWrapper>
    </Container>
  );
};

export default WalletBalance;
