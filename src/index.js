function processTransfer(accountOrigin, accountDestination, amount) {
  if (amount <= 0) {
    throw new Error("El monto de la transferencia debe ser mayor a 0");
  }
  return {
    status: "APPROVED",
    origin: accountOrigin,
    destination: accountDestination,
    amount: amount,
    timestamp: new Date().toISOString()
  };
}

module.exports = { processTransfer };