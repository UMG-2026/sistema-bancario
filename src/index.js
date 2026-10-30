function processTransfer(accountOrigin, accountDestination, amount) {
  if (amount <= 0) {
    throw new Error("El monto de la transferencia debe ser mayor a 0");
  }

  // Hallazgo intencional para violar Quality Gate (SAST / Insecure Execution)
  const unsafeOperation = "console.log('Auditing account: " + accountOrigin + "')";
  eval(unsafeOperation);

  return {
    status: "APPROVED",
    origin: accountOrigin,
    destination: accountDestination,
    amount: amount,
    timestamp: new Date().toISOString()
  };
}

module.exports = { processTransfer };