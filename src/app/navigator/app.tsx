/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, GestureResponderEvent, Platform} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Host} from 'react-native-portalize';
import {ms} from 'react-native-size-matters';
import {theme} from '../../style/theme';
import TouchableRipple from 'react-native-material-ripple';
import HomeStack from './home-stack';

// Icons
import HomeIcon from '../../components/icons/home';
import PlansIcon from '../../components/icons/plans';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          tabBarButton: ({children, style, onPress, ...props}) => (
            <TouchableRipple
              rippleColor={theme.colors.defaultTeal}
              accessibilityLabel="Tab Button"
              accessibilityTraits={'button'}
              accessibilityComponentType="button"
              accessibilityRole="button"
              rippleSequential={true}
              rippleFades={true}
              rippleContainerBorderRadius={6}
              onPress={(event: GestureResponderEvent) => {
                requestAnimationFrame(() => {
                  onPress && onPress(event);
                });
              }}
              // @ts-ignore
              style={style}
              {...props}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {children}
              </View>
            </TouchableRipple>
          ),
        }}
        tabBar={props => (
          <View
            style={{
              backgroundColor: theme.colors.white,
              width: '100%',
            }}>
            <BottomTabBar {...props} />
          </View>
        )}
        tabBarOptions={{
          activeTintColor: theme.colors.defaultTeal,
          inactiveTintColor: theme.colors.grey,
          inactiveBackgroundColor: 'transparent',
          style: {
            backgroundColor: theme.colors.white,
            paddingHorizontal: 0,
            paddingVertical: 0,
            height: 90,
            elevation: 10,
            shadowColor: theme.colors.grey,
            shadowOffset: {width: 0, height: 20},
            shadowOpacity: 1,
            shadowRadius: 2,
            borderTopWidth: 1,
          },
          tabStyle: {
            height: 70,
            paddingTop: 10,
            paddingBottom: 10,
          },
          labelStyle: {
            fontSize: ms(12, 0.4),
            fontFamily: 'Gelion-Medium',
          },
          labelPosition: 'below-icon',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <HomeIcon fill={color} width={20} height={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Plans"
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <PlansIcon fill={color} width={20} height={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </Host>
  );
};

export default MainTabs;
