/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Animated, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Wallet from '../../screens/wallet';
import FundWallet from '../../screens/wallet/fund-wallet';
import {theme} from '../../style/theme';

const arrowLeft = require('../../../assets/images/arrow-left.png');

const Stack = createStackNavigator();

const {multiply} = Animated;

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Wallet"
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
        cardStyleInterpolator: ({
          current,
          next,
          inverted,
          layouts: {screen},
        }) => {
          const translateFocused = multiply(
            current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [screen.width, 0],
              extrapolate: 'clamp',
            }),
            inverted,
          );

          const translateUnfocused = next
            ? multiply(
                next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, screen.width * -0.3],
                  extrapolate: 'clamp',
                }),
                inverted,
              )
            : 0;

          const overlayOpacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.07],
            extrapolate: 'clamp',
          });

          const shadowOpacity = current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.3],
            extrapolate: 'clamp',
          });

          return {
            cardStyle: {
              transform: [
                // Translation for the animation of the current card
                {translateX: translateFocused},
                // Translation for the animation of the card on top of this
                {translateX: translateUnfocused},
              ],
            },
            overlayStyle: {opacity: overlayOpacity},
            shadowStyle: {shadowOpacity},
          };
        },
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
      <Stack.Screen name="Wallet" component={Wallet} />
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
        name="Debit Card"
        component={FundWallet}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
