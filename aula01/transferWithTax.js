export function transferWithTax(payer, receiver, transferAmount) {
    payer.balance = chargeTaxForTransfer(payer.balance, transferAmount);
    receiver.balance = receiver.balance - transferAmount;
    return [payer, receiver];
}

function chargeTaxForTransfer(balance, transferAmount) {
    const tax = 100;
    return balance - transferAmount - tax;
}