export function transferInternational(payer, receiver, transferAmount) {
  if (
    invalidTransferAmount(transferAmount) ||
    invalidPayerBalance(payer.balance, transferAmount)
  ) {
    throw new Error(`Invalid transfer amount: ${transferAmount}`);
  }

  if (transferAmount > 1000 && transferAmount < 5000) {
    payer.balance =
      payer.balance -
      transferAmount -
      getTransferAmountPercent(transferAmount, 5);
    receiver.balance = receiver.balance + transferAmount;
  } else {
    payer.balance =
      payer.balance -
      transferAmount -
      getTransferAmountPercent(transferAmount, 10);
    receiver.balance = receiver.balance + transferAmount;
  }

  return [payer, receiver];
}

function invalidTransferAmount(transferAmount) {
  return transferAmount < 1000 || transferAmount > 9999;
}

function invalidPayerBalance(balance, transferAmount) {
  return transferAmount + 100 > balance;
}

function getTransferAmountPercent(transferAmount, percent) {
  return (transferAmount * percent) / 100;
}
