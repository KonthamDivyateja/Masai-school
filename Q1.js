//Question 1
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Output: Current count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Output: Current count: ${count}`);
        },
        display: function() {
            console.log(`Output: Current count: ${count}`);
        }
    };
}

const counter = createCounter();
counter.increment();  
counter.increment();  
counter.decrement();  
counter.display();

//Question 2

function createBankAccount() {
    let balance = 0;
    let transactions = [];

    function logTransaction(type, amount, newBalance, status) {
        transactions.push({
            type: type,
            amount: amount,
            date: new Date().toISOString(),
            newBalance: newBalance,
            status: status || "Success"
        });
    }

    return {
        deposit: function(amount) {
            balance += amount;
            logTransaction('Deposit', amount, balance);
            console.log(`Output: Deposited: ${amount}`);
        },

        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
                logTransaction('Withdraw', amount, balance);
                console.log(`Output: Withdrawn: ${amount}`);
            } else {
                logTransaction('Withdraw', amount, balance, "Insufficient Balance");
                console.log(`Output: Insufficient balance`);
            }
        },

        checkBalance: function() {
            console.log(`Output: Current balance: ${balance}`);
            return balance;
        },

        getTransactionHistory: function() {
            return transactions;
        }
    };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400); 
console.log(account.balance); 
account.checkBalance();