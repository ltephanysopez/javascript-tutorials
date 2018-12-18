// JavaScript provides many different ways for creating and using objects

function Account(amount) {
   this.balance = amount;     // property
   this.deposit = deposit;    // function
   this.withdraw = withdraw;  // function
   this.toString = toString;  // function
}

// The this keyword is used to link each function and property to an object distance
// The following code lists the function definitions for the preceding declarations

function deposit (amount) {
   this.balance += amount;
}

function withdraw (amount) {
   if (amount <= this.balance) {
      this.balance -= amount;
   }
   if (amount > this.balance) {
      print("Insufficient funds");
   }
}

function toString() {
   return "Balance: " + this.balance;
}

var account = new Account(50);
account.deposit(10);
console.log(account.toString()); // Balance: 60
account.withdraw(7);
console.log(account.toString()); // Balance: 53
account.withdraw(8);
console.log(account.toString()); // Balance: 45
