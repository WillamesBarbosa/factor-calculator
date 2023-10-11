export const handleDeleteNumbersIntoDisplay = (initialValue, setInitialValue) => (initialValue === '0' || initialValue === '' ? setInitialValue('0') : setInitialValue(initialValue.slice(0, -1)));
