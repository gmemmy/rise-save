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
  height: 55px;
`;

const ButtonContainer = styled(LinearGradient)<{disabled?: boolean}>`
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
  border-color: ${theme.colors.defaultTeal};
  border-width: 1px;
  background-color: ${theme.colors.defaultTeal};
`;

export const ColoredButton = React.memo(function ({
  children,
  onPress,
  isLoading,
  ...props
}: TouchableRipple['props'] & {isLoading?: boolean; icon?: React.ReactNode}) {
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
        <ButtonText>{children}</ButtonText>
      </React.Fragment>
    );
  }, [children, isLoading]);

  return (
    <Ripple
      {...props}
      rippleColor="rgba(255, 255, 255, 0.8)"
      accessibilityLabel="Button"
      accessibilityTraits={props.disabled ? ['button', 'disabled'] : 'button'}
      accessibilityComponentType="button"
      accessibilityRole="button"
      rippleSequential={true}
      rippleFades={true}
      rippleContainerBorderRadius={6}
      onPress={handleOnPress}>
      <ButtonContainer
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        disabled={props.disabled}
        colors={[theme.colors.defaultTeal, theme.colors.defaultTeal]}>
        {renderItem()}
      </ButtonContainer>
    </Ripple>
  );
});

export default ColoredButton;
