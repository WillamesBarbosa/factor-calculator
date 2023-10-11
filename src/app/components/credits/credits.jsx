import P from 'prop-types';
import * as Styled from './styles';

export const Credits = ({ children }) => (
  <Styled.Container>
    <Styled.Paragraph>{children}</Styled.Paragraph>
  </Styled.Container>
);

Credits.propTypes = {
  children: P.string.isRequired,
};
