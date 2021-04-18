import * as React from 'react';
import {vs} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {commaAppend, sizeScale} from '../../utils';
import TouchableItem from '../widgets/buttons/touchable-item';

const greenCross = require('../../../assets/images/green-cross.png');

const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.white};
  flex-direction: row;
  margin-top: 23px;
  align-items: center;
`;

const IconWrapper = styled.View`
  height: 42px;
  width: 42px;
  border-radius: 50px;
  background-color: rgba(76, 217, 100, 0.2);
  align-items: center;
  justify-content: center;
`;

const CrossIcon = styled.Image`
  width: 9.4px;
  height: 9.55px;
  resize-mode: contain;
`;

const TransactionDetailsWrapper = styled.View`
  width: 84%;
  margin-left: 17.97px;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const TransactionDetailsLeftWrapper = styled.View`
  width: 50%;
`;

const TransactionTitle = styled.Text`
  font-size: 13px;
  line-height: 18px;
  font-family: Gelion-Medium;
  color: ${theme.colors.dark};
`;

const TransactionDate = styled.Text`
  font-size: 13px;
  line-height: 18px;
  font-family: Gelion-Regular;
  color: ${theme.colors.grey};
`;

const TransactionAmount = styled.Text`
  font-size: 13px;
  line-height: 18px;
  font-family: Gelion-Medium;
  color: ${theme.colors.dark};
`;

const HorizontalRuler = styled.View`
  height: 1px;
  background-color: rgba(181, 181, 181, 0.2);
  width: 100%;
  margin-top: ${sizeScale(vs(13), 'px')};
`;

const TransactionSummary = ({transaction}): React.ReactElement => {
  const {title, amount, date} = transaction;
  return (
    <TouchableItem>
      <Container>
        <IconWrapper>
          <CrossIcon source={greenCross} />
        </IconWrapper>
        <TransactionDetailsWrapper>
          <TransactionDetailsLeftWrapper>
            <TransactionTitle>{title}</TransactionTitle>
            <TransactionDate>{date}</TransactionDate>
          </TransactionDetailsLeftWrapper>
          <TransactionAmount>+ ${commaAppend(amount)}</TransactionAmount>
        </TransactionDetailsWrapper>
      </Container>
      <HorizontalRuler />
    </TouchableItem>
  );
};

export default TransactionSummary;
