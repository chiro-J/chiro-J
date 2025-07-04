class BankAccount {         // BankAccount 클래스 생성
    // 계좌 잔고 설정 - private
    private balance: number = 100;       // #속성 : 속성을 private로 선언, 최신 버전에서만 인식

    deposit(amount: number) {           // amount를 속성으로 갖는 예금 메서드 생성
        this.balance += amount;         // 예금 액수 만큼 잔고에 추가하는 기능
    }

    getBalance() {          // 계좌 잔고를 확인하는 메서드
        console.log(`${this.balance}원`);       // 클래스 내의 속성을 이용 (this.balance)
    }

    setBalance(amount: number) {        // private 속성에는 setter가 필요
        amount = amount * 1.1;          // 금리 기능 추가. 예금 액수에 10% 가산
        this.balance = amount;          // 금리가 적용된 최종 금액을 계좌 잔고로 업데이트
    }
}

// BankAccount 클래스의 객체 생성
let account = new BankAccount();

// 생성된 객체에서 금액 1만원 예금
account.setBalance(10000);

// 계좌 잔고 확인
account.getBalance();