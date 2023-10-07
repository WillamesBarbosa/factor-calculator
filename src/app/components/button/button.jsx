import P from 'prop-types';
import * as Styled from './styles';

const Button = ({ texts = '', onClick }) => (
  <Styled.Button onClick={onClick}>
    {texts}
  </Styled.Button>
);

Button.propTypes = {
  texts: P.string.isRequired,
  onClick: P.func.isRequired,
};
export default Button;
