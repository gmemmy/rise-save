import * as React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import TouchableItem from '../widgets/buttons/touchable-item';
import {theme} from '../../style/theme';
import {useNavigation} from '@react-navigation/native';

const testImage = require('../../../assets/images/test-plan.png');

const Container = styled.View`
  align-items: flex-start;
`;

const ImageWrapper = styled.View`
  height: 111px;
  width: 180px;
  border-radius: 8px;
`;

const PlanImage = styled(FastImage)`
  border-radius: 8px;
  height: 111px;
  width: 180px;
  resize-mode: contain;
`;

const PlanTitle = styled.Text`
  font-family: Gelion-Regular;
  font-size: 15px;
  line-height: 13px;
  margin-top: 15px;
  color: ${theme.colors.grey};
`;

const PlanAmount = styled.Text`
  font-size: 14px;
  line-height: 18px;
  margin-top: 4px;
  color: ${theme.colors.dark};
  font-family: Gelion-SemiBold;
`;

const PercentageChangeTag = styled.View`
  width: 75.53px;
  background-color: ${theme.colors.successGreen};
  border-radius: 13px;
  height: 20px;
  position: absolute;
  right: 16.33px;
  bottom: 8px;
  align-items: center;
  justify-content: center;
`;

const TagText = styled.Text`
  color: ${theme.colors.white};
  font-family: Gelion-Medium;
  font-size: 10px;
`;

interface Plan {
  plan: {
    id: string;
    balance: string;
    title: string;
  };
}

const Plan = ({plan}: Plan) => {
  const navigation = useNavigation();
  const {title, balance} = plan;
  return (
    <TouchableItem onPress={() => navigation.navigate('Fund Plan', {...plan})}>
      <Container>
        <ImageWrapper>
          <PlanImage
            source={testImage}
            resizeMode={FastImage.resizeMode.contain}
          />
          <PercentageChangeTag>
            <TagText>+ 3.2% today</TagText>
          </PercentageChangeTag>
        </ImageWrapper>
        <PlanTitle>{title}</PlanTitle>
        <PlanAmount>${balance}</PlanAmount>
      </Container>
    </TouchableItem>
  );
};

export default Plan;
