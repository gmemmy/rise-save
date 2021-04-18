/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import {useSelector, shallowEqual} from 'react-redux';
import Addfunds from '../../components/template/add-funds';
import {theme} from '../../style/theme';
import {FundingRoute} from '../../interface';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

interface CurrentPlan {
  balance: string;
  id: string;
  title: string;
}

const FundPlan: React.FC = (): React.ReactElement => {
  const route: FundingRoute = useRoute();

  const {id} = route.params;

  const currentPlan: CurrentPlan = useSelector(
    (state: any) => state.plan.plans[parseFloat(id) - 1],
    shallowEqual,
  );
  return (
    <Container>
      <Addfunds
        fundingSource="Your Wallet"
        recepientSource="Your Plan"
        recepientBalance={currentPlan && currentPlan.balance}
        type="plan"
        planId={id}
      />
    </Container>
  );
};

export default FundPlan;
