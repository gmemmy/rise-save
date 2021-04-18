import * as React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../style/theme';

const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.defaultTeal};
  justify-content: center;
  align-items: center;
`;

const SplashScreen = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        translucent={true}
        backgroundColor={theme.colors.defaultTeal}
        animated={true}
        showHideTransition="slide"
      />
    </Container>
  );
};

export default SplashScreen;
