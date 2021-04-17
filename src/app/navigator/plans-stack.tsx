/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Plans from '../../screens/plans';
import FundPlan from '../../screens/plans/fund-plan';
import {theme} from '../../style/theme';

const arrowLeft = require('../../../assets/images/arrow-left.png');

const Stack = createStackNavigator();

const PlansStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Plans"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.black,
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: theme.font.medium,
          color: theme.colors.dark,
          fontSize: 22,
          lineHeight: 28,
          marginTop: 20,
        },
        headerTitleAlign: 'center',
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 10,
              restSpeedThreshold: 10,
            },
          },
          close: {
            animation: 'spring',
            config: {
              stiffness: 1000,
              damping: 500,
              mass: 3,
              overshootClamping: true,
              restDisplacementThreshold: 10,
              restSpeedThreshold: 10,
            },
          },
        },
      }}>
      <Stack.Screen
        options={({}) => ({
          headerShown: true,
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              label=""
              truncatedLabel=""
              backImage={() => (
                <View
                  style={{
                    height: 33,
                    width: 33,
                    borderRadius: 33 / 2,
                    backgroundColor: theme.colors.offTeal,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <FastImage
                    source={arrowLeft}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{
                      height: 14,
                      width: 14,
                    }}
                  />
                </View>
              )}
            />
          ),
        })}
        name="Your Plans"
        component={Plans}
      />
      <Stack.Screen
        options={({}) => ({
          headerShown: true,
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              label=""
              truncatedLabel=""
              backImage={() => (
                <View
                  style={{
                    height: 33,
                    width: 33,
                    borderRadius: 33 / 2,
                    backgroundColor: theme.colors.offTeal,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <FastImage
                    source={arrowLeft}
                    resizeMode={FastImage.resizeMode.contain}
                    style={{
                      height: 14,
                      width: 14,
                    }}
                  />
                </View>
              )}
            />
          ),
        })}
        name="Fund Plan"
        component={FundPlan}
      />
    </Stack.Navigator>
  );
};

export default PlansStack;
