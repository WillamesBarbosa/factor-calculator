import P from 'prop-types';
import * as Styled from './styles';

const Button = ({ texts = [] }) => (
  <Styled.Container size={texts.length}>
    {texts.map(
      (text) => <Styled.Button key={text}>{text}</Styled.Button>,
    )}
  </Styled.Container>
);

Button.propTypes = {
  texts: P.arrayOf(P.string).isRequired,
};
export default Button;
