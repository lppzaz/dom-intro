function TextBill() {
  //create a variable that will keep track of the total bill
  var calls = 0;
  var smses = 0;
  var total = 0;

  function billType(billItemType){
  if (billItemType === 'call') {
      calls += 2.75;
  }
      else if  (billItemType === 'sms') {
      smses += 0.75;
    }
    total = calls+smses
  }

  function getCalls(){
    return calls.toFixed(2)
  }

  function getSmses(){
    return smses.toFixed(2)
  }

  function getTotals(){
    return total.toFixed(2)
  }

  function colorchange(){
    if (total >= 50){
        // adding the danger class will make the text red
      return "danger";
    }
    else if (total >= 30){
      return "warning";
    }
  }

  return {
    billItem:   billType,
    callsTotal: getCalls,
    smsTotal:   getSmses,
    totalBill:  getTotals,
    color:      colorchange
  }

}
var textBill = TextBill()
//creating an instance of Textbill FactoryForm
