class BankAccount {
    private balance: number = 100;       // #속성 : 속성을 private로 선언, 최신 버전에서만 인식

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        console.log(`${this.balance}원`);
    }

    setBalance(amount: number) {        // private 속성에는 setter가 필요
        amount = amount * 1.1;
        this.balance = amount;
    }
}

let account = new BankAccount();

account.setBalance(10000);

account.getBalance();