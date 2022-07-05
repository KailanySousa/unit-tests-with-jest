import { transferInternational } from "../transferInternational";
import { Account } from "../account";

describe("transferInternational", () => {
  test("it should transfer 1100 from an account with 2000 to another with 0", () => {
    const payerAccount = new Account(1, 2000);
    const receiverAccount = new Account(2, 0);

    const updateAccounts = transferInternational(
      payerAccount,
      receiverAccount,
      1100
    );

    expect(updateAccounts).toHaveLength(2);
    expect(updateAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 2, balance: 1100 }),
        expect.objectContaining({ id: 1, balance: 800 }),
      ])
    );
  });

  test("it should throw an error when transfer amount is < 1000", () => {
    const payerAccount = new Account(1, 1000);
    const receiverAccount = new Account(2, 2000);

    const updateAccounts = () => {
      transferInternational(payerAccount, receiverAccount, 900);
    };

    expect(updateAccounts).toThrow(Error("Invalid transfer amount: 900"));
  });

  test("it should throw an error when transfer amount is > 9999", () => {
    const payerAccount = new Account(1, 1000);
    const receiverAccount = new Account(2, 2000);

    const updateAccounts = () => {
      transferInternational(payerAccount, receiverAccount, 10000);
    };

    expect(updateAccounts).toThrow(Error("Invalid transfer amount: 10000"));
  });

  test("it should throw an error when transfer amount and tax is < payer balance", () => {
    const payerAccount = new Account(1, 200);
    const receiverAccount = new Account(2, 0);

    const updateAccounts = () => {
      transferInternational(payerAccount, receiverAccount, 300);
    };

    expect(updateAccounts).toThrow(Error("Invalid transfer amount: 300"));
  });
});
