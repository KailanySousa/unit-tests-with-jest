export function transfer(payer, receiver, transferAmount) {
  payer.balance = payer.balance - transferAmount;
  receiver.balance = receiver.balance + transferAmount;
  return [payer, receiver];
}
