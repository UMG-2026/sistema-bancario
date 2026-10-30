// tests/index.test.js
const { processTransfer } = require('../src/index');

test('Validar transferencia bancaria correcta', () => {
  const result = processTransfer("1001-A", "2002-B", 500.00);
  expect(result.status).toBe("APPROVED");
  expect(result.amount).toBe(500.00);
});

test('Rechazar transferencia con monto negativo o cero', () => {
  expect(() => processTransfer("1001-A", "2002-B", -50)).toThrow();
});