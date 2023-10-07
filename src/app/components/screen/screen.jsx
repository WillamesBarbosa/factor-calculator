import P from 'prop-types';
import * as Styled from './styles';

export const Screen = ({ text }) => (<Styled.Container>{text}</Styled.Container>);

Screen.propTypes = {
  text: P.string.isRequired,
};
