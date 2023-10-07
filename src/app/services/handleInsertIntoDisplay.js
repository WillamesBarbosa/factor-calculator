export const handleInsertIntoDisplay = (event, initialValue, setInitialValue) => {
  const value = event.target.textContent;
  return initialValue === '0' ? setInitialValue(value) : setInitialValue(`${initialValue}${value}`);
};
