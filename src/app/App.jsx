import React from 'react';
import { GlobalStyles } from './styles/global-styles';

import { Screen } from './components/screen/screen';
import Button from './components/button/button';
import Container from './components/container/container';
import { CalculatorBody } from './components/calculator_body/calculatorBody';
import { Portion } from './components/portion/portion';

const array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', '0', 'V'];
const array2 = ['C', ','];

function App() {
  return (
    <CalculatorBody>
      <Screen />
      <Portion amount={12} />
      <Container>
        <Button texts={array1} />
        <Button texts={array2} />
      </Container>
      <GlobalStyles />
    </CalculatorBody>
  );
}

export default App;
