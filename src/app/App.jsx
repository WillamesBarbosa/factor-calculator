import React from 'react';
import { Screen } from './components/screen/screen';
import Button from './components/button/button';
import Container from './components/container/container';

const array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', '0', 'V'];
const array2 = ['C', ','];

function App() {
  return (
    <>
      <Screen />
      <Container>
        <Button texts={array1} />
        <Button texts={array2} />
      </Container>
    </>

  );
}

export default App;
