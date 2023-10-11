function factorCalculatorService(
  productValue,
  installment,
  setAddition,
  setPortion,
  setTotalValue,
) {
  const productValueWithSpotCorrect = productValue.replace(/,/g, '.');
  const productValueFloat = parseFloat(productValueWithSpotCorrect);
  const installmentInterger = parseInt(installment, 10);
  const interestFactor = [
    0.95,
    1.03,
    0.5199,
    0.3533,
    0.269,
    0.2184,
    0.1846,
    0.1605,
    0.1425,
    0.1284,
    0.1172,
    0.1031,
    0.1,
  ];

  const value = (productValueFloat * interestFactor[installmentInterger]).toFixed(2);
  const fullValue = (value * installmentInterger).toFixed(2);
  const addition = (fullValue - productValueFloat).toFixed(2);

  setPortion(value);
  setTotalValue(fullValue);
  setAddition(addition);
}

export default factorCalculatorService;
