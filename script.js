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
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Taha Sakr',
  movements: [500, 2000, -100, 5000, -650, -130, 70, 1100],
  interestRate: 2, // %
  pin: 3333,
};
const account6 = {
  owner: 'Max Haberkern',
  movements: [600, 3000, -200, 6000, -750, -230, 80, 1200],
  interestRate: 3,
  pin: 1234,
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
const displayMovements = function (movements) {
  containerMovements.innerHTML = 0;
  containerMovements.textContent = '';
  movements.forEach(function (mov, index) {
    let moveType = mov > 0 ? 'DEPOSIT' : 'WITHDRAW';
    const html = `<div class="movements__row">
                     <div class="movements__type movements__type--deposit">
                     ${index + 1} ${moveType}</div>
                      <div class="movements__value">${mov}€</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
//////////////////////////Task-2//// 150/////////////////
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
