import * as React from 'react';
import styled from 'styled-components/native';
import TouchableRipple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';
import {GestureResponderEvent} from 'react-native';
import {theme} from '../../../style/theme';

// components
import ButtonText from './button-text';
import Loader from '../loader';

const Ripple = styled(TouchableRipple)`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled(LinearGradient)<{
  disabled?: boolean;
  color?: string;
}>`
  flex: 1;
  z-index: -1;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${({disabled}) => (disabled ? 0.4 : 1)};
  shadow-opacity: 1;
  shadow-radius: 4px;
  shadow-offset: 0 1px;
  shadow-color: rgba(15, 15, 15, 0.1);
  border-color: ${({color}) => (color ? color : theme.colors.defaultTeal)};
  border-width: 1px;
  background-color: ${({color}) => (color ? color : theme.colors.defaultTeal)};
`;

export const ColoredButton = React.memo(function ({
  children,
  onPress,
  isLoading,
  color,
  ...props
}: TouchableRipple['props'] & {
  isLoading?: boolean;
  icon?: React.ReactNode;
  color?: string;
}) {
  function handleOnPress(event: GestureResponderEvent) {
    requestAnimationFrame(() => {
      onPress && onPress(event);
    });
  }

  const renderItem = React.useCallback(() => {
    if (isLoading) {
      return <Loader width={22} height={22} />;
    }

    return (
      <React.Fragment>
        <ButtonText color={color && theme.colors.defaultTeal}>
          {children}
        </ButtonText>
      </React.Fragment>
    );
  }, [children, color, isLoading]);
  return (
    <Ripple
      {...props}
      rippleColor={
        color ? 'rgba(8, 152, 160, 0.8)' : 'rgba(255, 255, 255, 0.8)'
      }
      accessibilityLabel="Button"
      // @ts-ignore
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}
      onPress={handleOnPress}>
      <ButtonContainer
        color={color}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        disabled={props.disabled}
        colors={
          color
            ? [color, color]
            : [theme.colors.defaultTeal, theme.colors.defaultTeal]
        }>
        {renderItem()}
      </ButtonContainer>
    </Ripple>
  );
});

export default ColoredButton;
