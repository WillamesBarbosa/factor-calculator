import P from 'prop-types';
import * as Styled from './styles';

export const Container = ({
  children, direction = 'row', height = '50%', width = '90%', flex = '',
}) => (
  <Styled.Container direction={direction} height={height} width={width} flex={flex}>
    {children}
  </Styled.Container>
);

Container.propTypes = {
  children: P.node.isRequired,
  direction: P.string,
  height: P.string,
  width: P.string,
  flex: P.string,
};
