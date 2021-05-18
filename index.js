// customerName`: Declare a variable in global scope called `customerName` using
// the `var` keyword.
var customerName;
customerName = "bob";
var bestCustomer;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
 const leastFavoriteCustomer = 'Susan';

 function changeLeastFavoriteCustomer() {
     leastFavoriteCustomer = 'BILL';
 }
// - `leastFavoriteCustomer` and `changeLeastFavoriteCustomer()`: Now declare a

//   write a function called `changeLeastFavoriteCustomer()` that attempts to
//   change that constant - notice what JavaScript does when you try to change the
//   constant.
