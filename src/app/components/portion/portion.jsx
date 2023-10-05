import P from 'prop-types';
import * as Styled from './styles';

export const Portion = ({ amount = 0 }) => {
  const options = Array.from({ length: amount + 1 }, (v, k) => k);
  return (
    <Styled.Form>
      <Styled.Select>
        {options.map((optionNumber) => (
          <Styled.Option key={optionNumber}>
            {optionNumber === 0 ? 'À vista' : optionNumber}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.Form>
  );
};

Portion.propTypes = {
  amount: P.number.isRequired,
};
