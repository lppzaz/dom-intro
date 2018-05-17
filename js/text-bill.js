//get a reference to the add button
var billTypeEntered = document.querySelector('.billTypeText');
var textBillAdd = document.querySelector('.addToBillBtn');
var callOne = document.querySelector('.callTotalOne');
var smsOne = document.querySelector('.smsTotalOne');
var textBillTotal = document.querySelector('.totalOne');



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
//creating an instance of Textbill FactoryForm
var textBill = TextBill()

function textBillFunc(){
  if (billTypeEntered){
    var billItemOne = billTypeEntered.value.trim();
    textBill.billItem(billItemOne);
  }

  //referencing generic alias from factoryform and sets values t
  callOne.innerHTML = textBill.callsTotal();
  smsOne.innerHTML = textBill.smsTotal();
  textBillTotal.innerHTML = textBill.totalBill();
  // set critical level colorchange
  var classColor = textBill.color();
  textBillTotal.classList.add(classColor);
}

  //add an event listener for when the add button is pressed
textBillAdd.addEventListener('click', textBillFunc);
