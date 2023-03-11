'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

const accounts = [account1, account2, account3, account4];
let activeUser = [];

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

//function defitions
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row"> 
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div> 
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  let usernames = [];
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcPrintBalance = function (movements) {
  let balance = movements.reduce(function (acc, mov, i, arr) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (user) {
  const incomes = user.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  const expenses = user.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  const interest = user.movements
    .filter(mov => mov > 0)
    .map(deposits => (deposits * user.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int, i) => acc + int);
  console.log(incomes);
  labelSumIn.textContent = incomes;
  labelSumOut.textContent = Math.abs(expenses);
  labelSumInterest.textContent = interest;
};

///Event Listeners

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  activeUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  let activeUserPin = inputLoginPin.value / 1;

  if (activeUserPin === activeUser.pin) {
    labelWelcome.textContent = `Welcome Back, ${activeUser.owner}`
    containerApp.style.opacity = 100
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    displayMovements(activeUser.movements);
    calcPrintBalance(activeUser.movements);
    calcDisplaySummary(activeUser);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const transferee = accounts.find(acc => acc.username === inputTransferTo.value);
  transferee.movements.push(inputTransferAmount.value);
  activeUser.movements.push(inputTransferAmount.value * -1);
  displayMovements(activeUser.movements)
  calcPrintBalance(activeUser.movements);
  calcDisplaySummary(activeUser);
  inputTransferAmount.value = inputTransferTo.value = "";

  







})

//Call functions
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

const movementsDescriptions = movements.map(
  (mov, i, arr) => `Movement ${i + 1}`
);

console.log(movementsDescriptions);

/////////////////////////////////////////////////
