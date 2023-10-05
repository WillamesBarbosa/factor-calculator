import P from 'prop-types';
import * as Styled from './styles';

export const CalculatorBody = ({ children }) => (<Styled.Container>{children}</Styled.Container>);

CalculatorBody.propTypes = {
  children: P.node.isRequired,
};
