/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
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

const data: any = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    amount: '$5000.45',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    amount: '$5000.45',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    amount: '$5000.45',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    amount: '$5000.45',
  },
];

const renderItem = () => <Plan />;

const Plans = () => {
  return (
    <Container>
      <ContentWrapper
        data={data}
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
