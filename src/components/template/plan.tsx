import * as React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import TouchableItem from '../widgets/buttons/touchable-item';
import {theme} from '../../style/theme';

const testImage = require('../../../assets/images/test-plan.png');

const Container = styled.View`
  align-items: flex-start;
`;

// const ImageWrapper = styled.View`
//   width: 175.33px;
//   height: 101px;
//   background-color: red;
//   border-radius: 8px;
// `;

const PlanImage = styled(FastImage)`
  border-radius: 8px;
  height: 111px;
  width: 180px;
  resize-mode: contain;
`;

const PlanTitle = styled.Text`
  font-family: Gelion-Regular;
  font-size: 11px;
  line-height: 13px;
  margin-top: 9px;
  color: ${theme.colors.grey};
`;

const PlanAmount = styled.Text`
  font-size: 13px;
  line-height: 18px;
  margin-top: 4px;
  color: ${theme.colors.dark};
  font-family: Gelion-SemiBold;
`;

const Plan = () => {
  return (
    <TouchableItem>
      <Container>
        <PlanImage
          source={testImage}
          resizeMode={FastImage.resizeMode.contain}
        />
        {/* <ImageWrapper>
          <PlanImage
            source={testImage}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageWrapper> */}
        <PlanTitle>Build Wealth</PlanTitle>
        <PlanAmount>$5000.00</PlanAmount>
      </Container>
    </TouchableItem>
  );
};

export default Plan;
