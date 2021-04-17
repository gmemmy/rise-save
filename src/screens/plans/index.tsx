/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, shallowEqual} from 'react-redux';
import {theme} from '../../style/theme';
import Plan from '../../components/template/plan';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  padding-horizontal: 16px;
`;

const ContentWrapper = styled.FlatList`
  width: 100%;
  margin-top: 25px;
`;

const renderItem = ({item, index}: any) => {
  return <Plan key={index} plan={item} />;
};

const Plans = () => {
  const allPlans: any = useSelector(
    (state: any) => state.plan.plans,
    shallowEqual,
  );

  return (
    <Container>
      <ContentWrapper
        data={allPlans}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
      />
    </Container>
  );
};

export default Plans;
