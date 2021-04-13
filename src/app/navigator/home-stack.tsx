import * as React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Wallet from '../../screens/wallet';
import {theme} from '../../style/theme';

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
    </Stack.Navigator>
  );
};

export default HomeStack;
