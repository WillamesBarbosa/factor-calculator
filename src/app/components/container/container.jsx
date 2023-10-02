import P from 'prop-types';
import * as Styled from './styles';

const Container = ({ children }) => (
  <Styled.Wrap>{children}</Styled.Wrap>
);

Container.propTypes = {
  children: P.node.isRequired,
};

export default Container;
