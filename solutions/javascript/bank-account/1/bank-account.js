export class BankAccount {
  constructor() {
    this._balance = 0;
    this.state = false;
  }

  open() {
    if (this.state)
      throw new ValueError;
    this.state = true;
    this._balance = 0;
  }

  close() {
    if (!this.state)
      throw new ValueError;
    this.state = false;
  }

  deposit(amount) {
    if (!this.state || amount < 0)
      throw new ValueError;
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this.state || this._balance < amount || amount < 0 )
      throw new ValueError;
    this._balance -= amount;
  }

  get balance() {
    if (!this.state)
      throw new ValueError;
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
