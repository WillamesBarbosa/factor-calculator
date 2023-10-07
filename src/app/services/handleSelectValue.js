export const handleSelectValue = (event, setSelectValue) => {
  const { value } = event.target;
  return value === 'À vista' ? setSelectValue(0) : setSelectValue(value);
};
