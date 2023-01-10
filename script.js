/****************************** BankiGo APP***************************/
'use strict';
// Remember , we Use array and objects because that is the most common ways
// of organizing data in js
// Daten
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.189Z',
    '2019-12-23T07:42:02.739Z',
    '2019-01-28T09:15:04.842Z',
    '2019-04-01T10:11:24.446Z',
    '2019-05-08T14:17:59.183Z',
    '2019-05-27T17:01:17.194Z',
    '2019-07-11T23:36:17.929Z',
    '2019-07-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-18T21:31:17.189Z',
    '2019-12-23T07:42:02.739Z',
    '2019-01-28T09:15:04.842Z',
    '2019-04-01T10:11:24.446Z',
    '2019-05-08T14:17:59.183Z',
    '2019-05-27T17:01:17.194Z',
    '2019-07-11T23:36:17.929Z',
    '2019-07-11T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US', // de-DE
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.189Z',
    '2019-12-23T07:42:02.739Z',
    '2019-01-28T09:15:04.842Z',
    '2019-04-01T10:11:24.446Z',
    '2019-05-08T14:17:59.183Z',
    '2019-05-27T17:01:17.194Z',
    '2019-07-11T23:36:17.929Z',
    '2019-07-11T10:51:36.790Z',
  ],
  currency: 'GBP',
  locale: 'en-EN',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.189Z',
    '2019-12-23T07:42:02.739Z',
    '2019-01-28T09:15:04.842Z',
    '2019-04-01T10:11:24.446Z',
    '2019-05-08T14:17:59.183Z',
    '2019-05-27T17:01:17.194Z',
    '2019-07-11T23:36:17.929Z',
    '2019-07-11T10:51:36.790Z',
  ],
  currency: 'AUD',
  locale: 'en-AD',
};
const account5 = {
  owner: 'Taha Sakr',
  movements: [500, 2000, -100, 5000, -650, -130, 70, 1100],
  interestRate: 2, // %
  pin: 5555,
  movementsDates: [
    '2019-11-18T21:31:17.189Z',
    '2019-12-23T07:42:02.739Z',
    '2019-01-28T09:15:04.842Z',
    '2019-04-01T10:11:24.446Z',
    '2019-05-08T14:17:59.183Z',
    '2019-05-27T17:01:17.194Z',
    '2019-07-11T23:36:17.929Z',
    '2019-07-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'de-DE',
};
const account6 = {
  owner: 'Max Haberkern',
  movements: [600, 3000, -200, 6000, -750, -230, 80, 1200],
  interestRate: 3,
  pin: 1234,
  movementsDates: [
    '2019-11-18T21:31:17.189Z',
    '2019-12-23T07:42:02.739Z',
    '2019-01-28T09:15:04.842Z',
    '2019-04-01T10:11:24.446Z',
    '2019-05-08T14:17:59.183Z',
    '2019-05-27T17:01:17.194Z',
    '2019-07-11T23:36:17.929Z',
    '2019-07-11T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'de-DE',
};
const accounts = [account1, account2, account3, account4, account5, account6];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//////////////////////////Task-1//// 147/////////////////
/**how to display movements array into user interface*****/
/**the first step */

const displayMovements = function (currentAccount, sort = false) {
  containerMovements.innerHTML = 0;
  containerMovements.textContent = '';
  const ascending = (a, b) => a - b;
  const Moves = sort
    ? currentAccount.movements.slice().sort(ascending)
    : currentAccount.movements;
  Moves.forEach(function (mov, index) {
    let moveType = mov > 0 ? 'deposit' : 'withdrawal';
    const acc_date = new Date(currentAccount.movementsDates[index]);
    // day/month/year
    const year = acc_date.getFullYear();
    const month = `${acc_date.getMonth() + 1}`.padStart(2, 0);
    const day = `${acc_date.getDate()}`.padStart(2, 0);
    const process_date = `${day}/${month}/${year}`;

    const html = `<div class="movements__row">
                     <div class="movements__type movements__type--${moveType}">
                     ${index + 1} ${moveType}</div>
                     <div class="movements__date">${process_date}</div>

                      <div class="movements__value">${mov.toFixed(2)}€</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);
//////////////////////////Task-2//// 151/////////////////
/**how to compute owner-names to usable usernames****************/
/**
 * forExample:
 *  Taha Sakr => ts
 *  Jassin Schmidt => js
 */

const convertToUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(function (user) {
        return user[0];
      })
      .join('');
  });
};
convertToUserNames(accounts);
console.log(accounts);
/*********************Task-3 Calculating and Printing Balance*********************/
// we should use reduce method with accumelator to calculate the balance of users
const DisplayBalance = function (account) {
  labelBalance.textContent = '';
  account.Balance = account.movements.reduce(function (
    accumelator,
    value,
    index
  ) {
    return accumelator + value;
  },
  0);

  labelBalance.textContent = `${account.Balance.toFixed(2)}€`;
};
// DisplayBalance(account1.movements);
/**********************************Task_4********************************/
// display the incomesummary and outcomesummary and interest,that the bank might pay for us

const DisplayAllSummaries = function (currentAccount) {
  const displayIncome = function (movements) {
    labelSumIn.textContent = '';
    const calcIncome = movements
      .filter(mov => mov > 0)
      .reduce(function (accumelator, value) {
        return accumelator + value;
      }, 0);
    labelSumIn.textContent = `${calcIncome.toFixed(2)}€`;
  };
  displayIncome(currentAccount.movements);
  const displayOutcome = function (movements) {
    labelSumOut.textContent = '';
    const calcOutcome = movements
      .filter(mov => mov < 0)
      .reduce(function (accumelator, value) {
        return accumelator + value;
      }, 0);
    labelSumOut.textContent = `${calcOutcome.toFixed(2)}€`;
  };
  displayOutcome(currentAccount.movements);

  const displayInterest = function (movements) {
    labelSumInterest.textContent = '';
    const interestRat = currentAccount.interestRate / 100;
    const calcInterest = movements
      .filter(mov => mov > 0)
      .map(mov => mov * interestRat)
      .filter(mov => mov >= 1)
      .reduce(function (accumelator, value) {
        return accumelator + value;
      }, 0);
    labelSumInterest.textContent = `${calcInterest.toFixed(2)}€`;
  };
  displayInterest(currentAccount.movements);
};
// DisplayAllSummaries(account1);
/**********************************Task_5-find()***********************************************/
// Implementierung des EinLoggen
// 1-Event handler
const UI_Update = function (account) {
  //3- zeige die Umsätze oder(movements)an
  displayMovements(account);
  //4- zeige den Kontostand/balance an
  DisplayBalance(account);
  //5- zeige alle Transaktionen an
  DisplayAllSummaries(account);
};

let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // prevent reloading-form
  event.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return acc.username === inputLoginUsername.value;
  });
  console.log(currentAccount);
  if (
    currentAccount?.pin === Number(inputLoginPin.value) &&
    currentAccount.username === inputLoginUsername.value
  ) {
    console.log('Right-password');
    //1- zeige Welcome nachricht an
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
    // 2- Löschen das Einloggen-Feld
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    /****************Task_11*************/
    //Create current date and time
    // day/month/year
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = `${nowDate.getMonth() + 1}`.padStart(2, 0);
    const day = `${nowDate.getDate()}`.padStart(2, 0);
    const hour = `${nowDate.getHours()}`.padStart(2, 0);
    const min = `${nowDate.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    UI_Update(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    // 2- Löschen das Einloggen-Feld
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    console.log('False Login');
  }
});

/**********************************Task_6***********************************************/
// Implementing Transfers
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });
  console.log(amount, receiverAccount);
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAccount &&
    amount < currentAccount.Balance &&
    receiverAccount.username !== currentAccount.username
  ) {
    console.log('right condition');
    receiverAccount.movements.push(amount);
    receiverAccount.movementsDates.push(new Date().toISOString()); // task_11
    currentAccount.movements.push(amount * -1);
    currentAccount.movementsDates.push(new Date().toISOString()); // task_11
    UI_Update(currentAccount);
  } else {
    console.log('error');
  }
});

/**********************************Task_7***********************************************/
//the findIndex()
// Implementing of Closing account
// Eventhandler with addEventListener()
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc =>
        acc.username === currentAccount.username &&
        acc.pin === currentAccount.pin
    );
    // delete account
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

/**********************************Task_8***********************************************/
// Implementing Loan requests
// the mount of any deposits in transaktions of movements must be >= 10% of mount of loan
// Event handler
btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amountLoan = Math.floor(Number(inputLoanAmount.value));
  const loanRate = amountLoan * 0.1;
  if (
    amountLoan > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov > loanRate;
    })
  ) {
    currentAccount.movements.push(amountLoan);
    currentAccount.movementsDates.push(new Date().toISOString());
    // Update the UI
    UI_Update(currentAccount);
  } else {
    console.log('loan refused');
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

/**********************************Task_9***********************************************/
// Sorting the movements of account
// ascending and descending by using .sort(callb)
// but we should the functionality of displayMovements()
// by add sort() in Task_1
// sorted variable is called here a state variable
let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
