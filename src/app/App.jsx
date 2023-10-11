import React, { useState } from 'react';
import { GlobalStyles } from './styles/global-styles';

import { Screen } from './components/screen/screen';
import Button from './components/button/button';
import { CalculatorBody } from './components/calculator_body/calculatorBody';
import { Portion } from './components/portion/portion';
import { handleInsertIntoDisplay } from './services/handleInsertIntoDisplay';
import { handleSelectValue } from './services/handleSelectValue';
import factorCalculatorService from './services/factorCalculatorService';
import { handleDeleteNumbersIntoDisplay } from './services/handleDeleteNumbersIntoDisplay';
import { Container } from './components/container/container';
import { ButtonGrid } from './components/button-grid/buttonGrid';
import { ScreenComponent } from './components/screen-component/screenComponent';

// const [sumValue, setSumValue] = useState(0);

function App() {
  const [initialValue, setInitialValue] = useState('0');
  const [portion, setPortion] = useState('0');
  const [addition, setAddition] = useState('0');
  const [totalValue, setTotalValue] = useState('0');

  const [selectValue, setSelectValue] = useState(0);
  return (
    <CalculatorBody>
      <Screen>
        <ScreenComponent stament="Ini:" value={initialValue === '' ? '0' : initialValue} />
        <ScreenComponent stament="Par:" value={portion} />
        <ScreenComponent stament="Acr:" value={addition} />
        <ScreenComponent stament="Tot:" value={totalValue} />
      </Screen>
      <Portion amount={12} onChange={(event) => handleSelectValue(event, setSelectValue)} />
      <Container>
        <Container flex="70%" height="100%" width="70%" direction="column">
          <ButtonGrid flex="75%">
            <Button texts="1" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="2" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="3" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="4" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="5" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="6" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="7" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="8" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="9" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          </ButtonGrid>
          <ButtonGrid flex="25%" format="2fr 1fr">
            <Button texts="0" onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
            <Button texts="," onClick={(event) => handleInsertIntoDisplay(event, initialValue, setInitialValue)} />
          </ButtonGrid>
        </Container>
        <ButtonGrid flex="30%" format="repeat(1, 1fr)">
          <Button texts="del" onClick={() => handleDeleteNumbersIntoDisplay(initialValue, setInitialValue)} />
          <Button texts="=" onClick={() => factorCalculatorService(initialValue, selectValue, setAddition, setPortion, setTotalValue)} />
        </ButtonGrid>

      </Container>
      <GlobalStyles />
    </CalculatorBody>
  );
}

export default App;
