// add event listener
function calcBill(billString) {
  console.log(billString);
  var billTotal = 0;
  //split the string
  var billItems = billString.split(",");
  //loop over all the bill items
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    if (billItem === "call") {
      billTotal += 2.75;
    } else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  return billTotal.toFixed(2);
}
