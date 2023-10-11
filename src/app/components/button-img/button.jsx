import P from 'prop-types';
import * as Styled from './styles';

const ButtonImg = ({
  texts, onClick, size = '5rem', color = 'rgba(41, 168, 255, 1)', backgroundColor = 'rgba(48, 49, 54, 1)',
}) => (
  <Styled.Button onClick={onClick} size={size} color={color} backgroundColor={backgroundColor}>
    <Styled.Img src={texts} />
  </Styled.Button>
);

ButtonImg.propTypes = {
  texts: P.string.isRequired,
  onClick: P.func.isRequired,
  size: P.string,
  color: P.string,
  backgroundColor: P.string,
};
export default ButtonImg;
