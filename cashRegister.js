/* --- PROBLEM ---
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.


Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.


Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

/****** SOLUTION *****/
function checkCashRegister(price, cash, cid) {
  const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let change = cash - price;
  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }

  if (change > cidTotal) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change.toFixed(2) === cidTotal.toFixed(2)) {
    return {status: "CLOSED", change: cid};
  } else {
    let result = {status: "OPEN", change: []};
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyName = cid[i][0];
      let currencyTotal = cid[i][1];
      let currencyValue = currencyValues[currencyName];
      let currencyAmount = 0;

      while (change >= currencyValue && currencyTotal > 0) {
        currencyAmount++;
        change -= currencyValue;
        currencyTotal -= currencyValue;
        change = Math.round(change * 100) / 100;
      }

      if (currencyAmount > 0) {
        result.change.push([currencyName, currencyAmount * currencyValue]);
      }
    }

    if (result.change.length < 1 || change > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    return result;
  }
}

/* --- EXPLANATON
The function takes three arguments: price (the purchase price), cash (the payment), and cid (the cash-in-drawer, a 2D array listing available currency).

The function first defines an object called currencyValues that maps each currency name to its value.

The function then calculates the amount of change needed and the total amount of cash-in-drawer.

If the total cash-in-drawer is less than the change due, the function returns {status: "INSUFFICIENT_FUNDS", change: []}.

If the total cash-in-drawer is equal to the change due, the function returns {status: "CLOSED", change: cid}.

Otherwise, the function loops through the cash-in-drawer from highest to lowest currency and calculates the number of bills/coins needed for each currency. If there are not enough bills/coins of a certain currency to make change, the function skips to the next currency. If the change due is greater than 0 and there are no more bills/coins available, the function returns {status: "INSUFFICIENT_FUNDS", change: []}. Otherwise, the function returns {status: "OPEN", change: result.change}, where result.change is an array of bills/coins used to make change, sorted from highest to lowest currency.
*/