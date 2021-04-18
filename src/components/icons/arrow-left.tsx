import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Arrowleft(props: Omit<SvgProps, 'viewBox'>) {
  return (
    <Svg width="!1" height="14" viewBox="0 0 29 23" {...props}>
      <Path d="M7 7.5L1.6 13l4.9 5c4.5 4.6 7.5 6.2 7.5 4.2 0-.5-1.3-2.1-3-3.7-1.6-1.6-3-3.2-3-3.6 0-.5 4.4-.5 9.9-.2 7.1.4 10 .3 10.6-.6.4-.7.5-1.4.3-1.6-.2-.2-5-.7-10.6-1.1l-10.3-.7 3.2-3.3c2.2-2.3 3-3.7 2.3-4.4-.6-.6-2.8.9-6.4 4.5z" />
    </Svg>
  );
}

export default Arrowleft;
