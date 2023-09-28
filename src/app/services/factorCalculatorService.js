function factorCalculatorService(productValue, installment) {
  const productValueFloat = parseFloat(productValue);
  const installmentInterger = parseInt(installment, 10);
  const interestFactor = [
    0,
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

  // Verifica se o value é um float e retorna ele ou um error
  return Number.isFinite(value) ? value : 'Error';
}

export default factorCalculatorService;
