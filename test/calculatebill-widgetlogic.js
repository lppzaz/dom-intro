
function calculateBtnClicked(){
 var billString = 'call'
  //split the string
  var billItems = billString.split(",");
  // a variable for the total phone bill.
  var billTotal = calculateBtnClicked(value);

  //loop over all the bill items
  for (var i=0;i<billItems.length;i++){
      var billItem = billItems[i].trim();
    if (billItem === "call"){
        billTotal += 2.75;
    }

    else if(billItem === "sms"){
        billTotal += 0.75;
    }

return billTotal;
}
}
