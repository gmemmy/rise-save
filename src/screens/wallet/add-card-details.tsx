import * as React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../style/theme';
import {sizeScale} from '../../utils';
import {vs} from 'react-native-size-matters';

// Components
import InputField from '../../components/widgets/text-input';
import ColoredButton from '../../components/widgets/buttons/colored-button';

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
  align-items: center;
`;

const ContentWrapper = styled.View`
  padding-horizontal: 16px;
  width: 100%;
  margin-top: 30px;
`;

const CardNumberInputWrapper = styled.View`
  height: 44px;
  width: 100%;
`;

const ContentBottomWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
`;

const ContentBottomInputWrapper = styled.View`
  width: 48%;
  height: 44px;
`;

const ButtonWrapper = styled.View`
  height: 55px;
  width: 368px;
  margin-top: auto;
  margin-bottom: ${sizeScale(vs(39), 'px')};
`;

const AddPaymentMethod: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <ContentWrapper>
        <CardNumberInputWrapper>
          <InputField placeholder="Card Number" type="card-number" />
        </CardNumberInputWrapper>
        <ContentBottomWrapper>
          <ContentBottomInputWrapper>
            <InputField placeholder="MM/YY" type="card-expiry-number" />
          </ContentBottomInputWrapper>
          <ContentBottomInputWrapper>
            <InputField placeholder="CVV" type="card-cvv" />
          </ContentBottomInputWrapper>
        </ContentBottomWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <ColoredButton disabled={false} isLoading={false} onPress={() => {}}>
          Add ₦4,263
        </ColoredButton>
      </ButtonWrapper>
    </Container>
  );
};

export default AddPaymentMethod;
