// src/index.js
const { exec } = require("child_process");

function processTransfer(accountOrigin, accountDestination, amount) {
  if (amount <= 0) {
    throw new Error("El monto de la transferencia debe ser mayor a 0");
  }

  // VULNERABILIDAD CRÍTICA SAST (CWE-78: Command Injection)
  // Concatenación directa de variable sin sanitizar ejecutada en shell
  const cmd = "ping -c 1 " + accountOrigin;
  exec(cmd, (err, stdout, stderr) => {
    if (err) console.error(err);
  });

  // VULNERABILIDAD CRÍTICA SAST (CWE-95: Eval Injection)
  eval("console.log('Transfer from: ' + accountOrigin)");

  return {
    status: "APPROVED",
    origin: accountOrigin,
    destination: accountDestination,
    amount: amount,
    timestamp: new Date().toISOString()
  };
}

module.exports = { processTransfer };