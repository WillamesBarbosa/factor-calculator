export const handleDeleteNumbersIntoDisplay = (initialValue, setInitialValue) => (initialValue === '0' ? initialValue : setInitialValue(initialValue.slice(0, -1)));
