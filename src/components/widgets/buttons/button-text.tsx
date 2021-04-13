import styled from 'styled-components/native';
import {theme} from '../../../style/theme';

export const ButtonText = styled.Text<{color?: string}>`
  font-size: 17px;
  line-height: 22px;
  font-family: Gelion-SemiBold;
  text-align: center;
  color: ${({color}) => (color ? color : theme.colors.white)};
`;

export default ButtonText;
