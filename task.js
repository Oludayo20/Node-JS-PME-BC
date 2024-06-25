class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this._balance = balance;
  }

  get accountNumber() {
    return this._accountNumber;
  }

  get accountHolder() {
    return this._accountHolder;
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance >= 0) {
      this._balance = newBalance;
    } else {
      console.log('Balance cannot be negative.');
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid deposit amount.');
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount or insufficient balance.');
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, interestRate) {
    super(accountNumber, accountHolder, balance);
    this._interestRate = interestRate;
  }

  calculateInterest() {
    const interest = (this.balance * this._interestRate) / 100;
    console.log(`Interest earned: $${interest}`);
    this.balance += interest;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, overdraftLimit) {
    super(accountNumber, accountHolder, balance);
    this._overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance + this._overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid withdrawal amount or overdraft limit exceeded.');
    }
  }
}

class Bank {
  constructor() {
    this._accounts = [];
  }

  addAccount(account) {
    this._accounts.push(account);
  }

  removeAccount(accountNumber) {
    this._accounts = this._accounts.filter(
      (account) => account.accountNumber !== accountNumber
    );
  }

  listAccounts() {
    this._accounts.forEach((account) => {
      console.log(
        `Account Number: ${account.accountNumber}, Account Holder: ${account.accountHolder}, Balance: $${account.balance}`
      );
    });
  }
}

// Example Usage:

const bank = new Bank();
const savingsAccount = new SavingsAccount(101, 'Alice', 1000, 5);
const checkingAccount = new CheckingAccount(201, 'Bob', 500, 200);

bank.addAccount(savingsAccount);
bank.addAccount(checkingAccount);

savingsAccount.deposit(200);
savingsAccount.calculateInterest();

checkingAccount.withdraw(300);

bank.listAccounts();
