export const handleInsertIntoDisplay = (event, initialValue, setInitialValue) => {
  const value = event.target.textContent;
  if (initialValue === '0') {
    setInitialValue(value);
  } else if (value === ',' && initialValue.includes(',')) {
    // Evitar adicionar vírgula duplicada
    setInitialValue(initialValue);
  } else {
    setInitialValue(`${initialValue}${value}`);
  }
};
