var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

  bestCustomer;

  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
setBestCustomer();

  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
overwriteBestCustomer();

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}

changeLeastFavoriteCustomer();