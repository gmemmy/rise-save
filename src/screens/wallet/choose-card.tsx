import * as React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {vs, s, ms} from 'react-native-size-matters';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils';

// Components
import TouchableRipple from 'react-native-material-ripple';

// Icons
const cardIcon = require('../../../assets/images/card.png');
const angleArrowRight = require('../../../assets/images/angle-arrow-right.png');

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  align-items: center;
`;

const CardSelectionContainer = styled(TouchableRipple)`
  margin-top: ${sizeScale(vs(57), 'px')};
  width: 100%;
  padding-left: ${sizeScale(s(26), 'px')};
  padding-right: ${sizeScale(s(5.88), 'px')};
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const CardIcon = styled(FastImage)`
  height: ${sizeScale(vs(12.92), 'px')};
  width: ${sizeScale(s(16.96), 'px')};
`;

const CardIconWrapper = styled.View`
  background-color: ${theme.colors.offTeal};
  height: ${sizeScale(ms(42, 0.3), 'px')};
  width: ${sizeScale(ms(42, 0.3), 'px')};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const CardTextContainer = styled.View`
  margin-left: ${sizeScale(s(16), 'px')};
`;

const CardContainerTitle = styled.Text`
  font-size: ${sizeScale(ms(15, 0.2), 'px')};
  line-height: ${sizeScale(vs(20), 'px')};
  font-family: Gelion-Regular;
  color: ${theme.colors.dark};
`;

const CardContainerSubTitle = styled.Text`
  font-size: ${sizeScale(ms(11, 0.2), 'px')};
  line-height: ${sizeScale(vs(13), 'px')};
  font-family: Gelion-Regular;
  color: ${theme.colors.grey};
`;

const HorizontalRuler = styled.View`
  height: 1px;
  background-color: rgba(181, 181, 181, 0.2);
  width: 100%;
  margin-top: ${sizeScale(vs(20), 'px')};
`;

const AngleArrowIcon = styled(FastImage)`
  height: ${sizeScale(vs(14.43), 'px')};
  width: ${sizeScale(vs(8.12), 'px')};
  margin-left: auto;
`;

interface Route {
  key: string;
  name: string;
  params: {
    nairaValue: string;
    dollarValue: string;
    balanceToFund: string;
    type: string;
  };
}

const ChooseCard: React.FC = (): React.ReactElement => {
  const navigation = useNavigation();
  const route: Route = useRoute();

  const {nairaValue, dollarValue, balanceToFund, type} = route.params;

  return (
    <Container>
      <CardSelectionContainer
        rippleColor={theme.colors.defaultTeal}
        accessibilityLabel="Button"
        // @ts-ignore
        accessibilityTraits={'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        rippleSequential={true}
        rippleFades={true}
        rippleContainerBorderRadius={6}
        onPress={() => {
          navigation.navigate('Add Card Details', {
            nairaValue,
            dollarValue,
            balanceToFund,
            type,
          });
        }}>
        <ButtonContainer>
          <CardIconWrapper>
            <CardIcon
              source={cardIcon}
              resizeMode={FastImage.resizeMode.contain}
            />
          </CardIconWrapper>
          <CardTextContainer>
            <CardContainerTitle>Pay with a new Naira Card</CardContainerTitle>
            <CardContainerSubTitle>
              We support Mastercard, Visa and Verve.
            </CardContainerSubTitle>
          </CardTextContainer>
          <AngleArrowIcon
            source={angleArrowRight}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ButtonContainer>
        <HorizontalRuler />
      </CardSelectionContainer>
    </Container>
  );
};

export default ChooseCard;
