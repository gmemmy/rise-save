import * as React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';
import MakeItRain from 'react-native-make-it-rain';
import {theme} from '../../style/theme';
import {commaAppend, sizeScale} from '../../utils';
import {ms, s, vs} from 'react-native-size-matters';
import ColoredButton from '../../components/widgets/buttons/colored-button';

// Icon
const checkIcon = require('../../../assets/images/check.png');

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  align-items: center;
`;

const ContentWrapper = styled.View`
  align-items: center;
  margin-top: 100px;
`;

const SuccessMessage = styled.Text`
  text-align: center;
  font-size: 22px;
  line-height: 28px;
  color: ${theme.colors.dark};
  font-family: Gelion-Medium;
  margin-top: 45px;
`;

const CheckIconWrapper = styled.View`
  background-color: ${theme.colors.offTeal};
  height: ${sizeScale(ms(98, 0.3), 'px')};
  width: ${sizeScale(ms(98, 0.3), 'px')};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled(FastImage)`
  height: ${sizeScale(vs(39.97), 'px')};
  width: ${sizeScale(s(39.23), 'px')};
`;

const ButtonWrapper = styled.View`
  height: 55px;
  width: 368px;
  margin-top: auto;
  margin-bottom: ${sizeScale(vs(39), 'px')};
`;

const AnimatedCheckIconWrapper = Animatable.createAnimatableComponent(
  CheckIconWrapper,
);

const PaymentSuccessful: React.FC = (): React.ReactElement => {
  const navigation = useNavigation();
  const route: any = useRoute();
  const {amount, type} = route.params;

  return (
    <Container>
      <MakeItRain
        numItems={80}
        itemDimensions={{width: 40, height: 20}}
        itemTintStrength={0.8}
        flavor="rain"
      />
      <ContentWrapper>
        <AnimatedCheckIconWrapper animation="bounce">
          <CheckIcon
            source={checkIcon}
            resizeMode={FastImage.resizeMode.contain}
          />
        </AnimatedCheckIconWrapper>
        <SuccessMessage>
          You've successfully funded {'\n'} your {type} with $
          {commaAppend(amount)}
        </SuccessMessage>
      </ContentWrapper>
      <ButtonWrapper>
        <ColoredButton
          disabled={false}
          isLoading={false}
          onPress={() => {
            navigation.navigate('Wallet');
          }}>
          Okay
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default PaymentSuccessful;
