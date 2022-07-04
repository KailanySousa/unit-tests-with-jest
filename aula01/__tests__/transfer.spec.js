import { transfer } from "../transfer";
import { Account } from "../account";

describe("transfer", () => {
  test("it should transfer 500 from an account with 1000 to another with 0", () => {
    // Criação do cenário (setup)
    const payerAccount = new Account(1, 1000);
    const receiverAccount = new Account(2, 0);

    // Execução do que está sendo testado
    const updateAccounts = transfer(payerAccount, receiverAccount, 500);

    // Asserts
    expect(updateAccounts.length).toBe(2);
    
    expect(updateAccounts[0].id).toBe(1);
    expect(updateAccounts[0].balance).toBe(500);
    
    expect(updateAccounts[1].id).toBe(2);
    expect(updateAccounts[1].balance).toBe(500);
   
    // Alternativa mais legivel para executar os mesmos testes feitos acima
    expect(updateAccounts).toHaveLength(2);
    expect(updateAccounts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 2, balance: 500 }),
        expect.objectContaining({ id: 1, balance: 500 }),
      ])
    );
  });
    
    test("it should transfer 50 from an account with 100 to another with 600", () => {
      // Criação do cenário (setup)
      const payerAccount = new Account(1, 100);
      const receiverAccount = new Account(2, 600);

      // Execução do que está sendo testado
      const updateAccounts = transfer(payerAccount, receiverAccount, 50);

      // Asserts
      expect(updateAccounts).toHaveLength(2);
      expect(updateAccounts).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 2, balance: 650 }),
          expect.objectContaining({ id: 1, balance: 50 }),
        ])
      );
    });
});
