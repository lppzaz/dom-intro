//get a reference to the add button
var Select = document.querySelector('.billItemTypeRadio')
var radBtn = document.querySelector('.radioBillAddBtn')
var callTwo = document.querySelector('.callTotalTwo')
var smsTwo = document.querySelector('.smsTotalTwo')
var radioTotal = document.querySelector('.totalTwo')
//create a variable that will keep track of the total bill
var callsTotal3 = 0;
var smsTotal3 = 0;
var totalCost3 = 0;


function radioBillTotal(){
  billTotalElement.classList.remove("warning");
  billTotalElement.classList.remove("danger");
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
  var billItemType = checkedRadioBtn.value
  }
  if (billItemType === 'call') {
    callsTotal3 += 2.75;
}
    else if  (billItemType === 'sms') {
    smsTotal3 += 0.75;

  }
    smsTwo.innerHTML = smsTotal3.toFixed(2);
    callTwo.innerHTML = callsTotal3.toFixed(2);

      var totalCost3 = callsTotal3 + smsTotal3
      radioTotal.innerHTML = totalCost3.toFixed(2);

      if (totalCost3 >= 50){
          // adding the danger class will make the text red
          radioTotal.classList.add("danger");
        }
      else if (totalCost3 >= 30){
          radioTotal.classList.add("warning");
        }



}
//add an event listener for when the add button is pressed
radBtn.addEventListener('click',radioBillTotal);
