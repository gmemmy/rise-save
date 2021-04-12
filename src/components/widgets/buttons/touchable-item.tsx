import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {TouchableProps} from '../../../interface';

const TouchableItem = React.memo(function (props: TouchableProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      {props.children}
    </TouchableOpacity>
  );
});

export default TouchableItem;
