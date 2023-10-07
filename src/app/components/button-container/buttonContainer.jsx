import P from 'prop-types';
import * as Styled from './styles';

export const ButtonContainer = ({ children }) => (<Styled.Container>{children}</Styled.Container>);

ButtonContainer.propTypes = {
  children: P.node.isRequired,
};
