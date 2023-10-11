import P from 'prop-types';
import * as Styled from './styles';

export const ButtonGrid = ({ children, flex, format = 'repeat(3, 1fr)' }) => (
  <Styled.Container flex={flex} format={format}>
    {children}
  </Styled.Container>
);

ButtonGrid.propTypes = {
  children: P.node.isRequired,
  flex: P.string.isRequired,
  format: P.string,
};
