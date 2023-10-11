import P from 'prop-types';
import * as Styled from './styles';

export const ScreenComponent = ({ stament, value }) => (
  <Styled.Container>
    <Styled.Statement>{stament}</Styled.Statement>
    <Styled.Value>
      R$
      {value}
    </Styled.Value>
  </Styled.Container>
);

ScreenComponent.propTypes = {
  stament: P.string.isRequired,
  value: P.string.isRequired,
};
