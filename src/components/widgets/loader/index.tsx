import * as React from 'react';
import {
  Svg,
  Path,
  G,
  Defs,
  Stop,
  RadialGradient,
  SvgProps,
} from 'react-native-svg';
import {Animated, Easing} from 'react-native';
import {theme} from '../../../style/theme';

const LoaderSvg = ({...props}: Omit<SvgProps, 'viewBox'>) => (
  <Svg viewBox="0 0 24 24" width="48" height="48" {...props}>
    <Defs>
      <RadialGradient
        cx="97.483%"
        cy="28.573%"
        fx="97.483%"
        fy="28.573%"
        r="168.336%"
        gradientTransform="matrix(.9983 -.05822 .02352 .40335 -.005 .227)"
        id="a">
        <Stop stopColor={theme.colors.white} offset="0%" />
        <Stop
          stopColor={theme.colors.white}
          stopOpacity=".816"
          offset="18.426%"
        />
        <Stop stopColor={theme.colors.white} stopOpacity="0" offset="100%" />
      </RadialGradient>
    </Defs>
    <G fill="none" fill-rule="evenodd">
      <Path d="M0 0h24v24H0z" />
      <Path
        d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11z"
        stroke="url(#a)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="48.33 69.117"
      />
    </G>
  </Svg>
);

const Loader = React.memo(function ({
  width = 48,
  height = 48,
}: {
  width?: number;
  height?: number;
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  React.useLayoutEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 800,
        easing: Easing.bezier(0.25, 0.29, 0.84, 0.86),
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  return (
    <Animated.View style={{transform: [{rotate: spin}]}}>
      <LoaderSvg width={width} height={height} />
    </Animated.View>
  );
});

export default Loader;
