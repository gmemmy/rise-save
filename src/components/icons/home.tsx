import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Home(props: Omit<SvgProps, 'viewBox'>) {
  return (
    <Svg width={18.33} height={18.33} viewBox="0 0 38 38" {...props}>
      <Path d="M10.9 9.8c-4.8 4.2-8.5 7.9-8.3 8.1.2.2 1-.2 1.9-.9 1.3-1.1 1.5-.2 1.5 7.9 0 7.8.3 9.4 2 11.1 3.2 3.2 4.7 2.5 5.2-2.5.7-5.9 2.2-7.5 6.8-7.5s6.1 1.6 6.8 7.5c.5 5 2 5.7 5.2 2.5 1.7-1.7 2-3.3 2-11.1 0-8.1.2-9 1.5-7.9.9.7 1.7 1.1 1.9.9.4-.4-17-16-17.6-15.8-.2 0-4.2 3.5-8.9 7.7z" />
    </Svg>
  );
}

export default Home;
