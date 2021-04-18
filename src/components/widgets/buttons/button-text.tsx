import styled from 'styled-components/native';
import {theme} from '../../../style/theme';
import {ms} from 'react-native-size-matters';
import {sizeScale} from '../../../utils';

export const ButtonText = styled.Text<{color?: string}>`
  font-size: ${sizeScale(ms(17, 0.2), 'px')};
  line-height: 22px;
  font-family: Gelion-SemiBold;
  text-align: center;
  color: ${({color}) => (color ? color : theme.colors.white)};
`;

export default ButtonText;
