import P from 'prop-types';
import * as Styled from './styles';

export const Screen = ({ children }) => (<Styled.Container>{children}</Styled.Container>);

Screen.propTypes = {
  children: P.node.isRequired,
};
