import React, { useState } from 'react';
import { GlobalStyles } from './styles/global-styles';

import { Screen } from './components/screen/screen';
import Button from './components/button/button';
import Container from './components/container/container';
import { CalculatorBody } from './components/calculator_body/calculatorBody';
import { Portion } from './components/portion/portion';
import { ButtonContainer } from './components/button-container/buttonContainer';
import { handleInsertIntoDisplay } from './services/handleInsertIntoDisplay';
import { handleSelectValue } from './services/handleSelectValue';
import factorCalculatorService from './services/factorCalculatorService';
import { handleDeleteNumbersIntoDisplay } from './services/handleDeleteNumbersIntoDisplay';

// const [sumValue, setSumValue] = useState(0);

function App() {
  const [initialValue, setInitialValue] = useState('0');
  const [selectValue, setSelectValue] = useState(0);
  return (
    <CalculatorBody>
      <Screen text={`R$ ${initialValue === '' ? '0' : initialValue}`} />
      <Portion amount={12} onChange={(event) => handleSelectValue(event, setSelectValue)} />
      <Container>
        <ButtonContainer>
          <Button texts="1" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="2" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="3" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="4" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="5" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="6" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="7" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="8" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="9" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="delete" onClick={() => handleDeleteNumbersIntoDisplay(initialValue, setInitialValue)} />
          <Button texts="0" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          <Button texts="=" onClick={() => factorCalculatorService(initialValue, selectValue, setInitialValue)} />
        </ButtonContainer>
      </Container>
      <GlobalStyles />
    </CalculatorBody>
  );
}

export default App;
