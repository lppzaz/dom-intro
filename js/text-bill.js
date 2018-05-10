// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button
var billTypeEntered = document.querySelector('.billTypeText')
var addBtns = document.querySelector('.addToBillBtn')
var totaltextBill = document.querySelector('.totalOne')
var smsTotals = document.querySelector('.smsTotalOne')
var callTotals = document.querySelector('.callTotalOne')

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;
//add an event listener for when the add button is pressed

function textBillTotal(){

  billTotalElement.classList.remove("warning");
  billTotalElement.classList.remove("danger");

    var billItemOne = billTypeEntered.value.trim();
    if (billItemOne === "call"){
        callsTotal += 2.75;
        callTotals.innerHTML= callsTotal.toFixed(2);
        totalBill += 2.75;
        totaltextBill.innerHTML = totalBill.toFixed(2);
    }
    else if (billItemOne === "sms"){
      smsTotal += 0.75;
      smsTotals.innerHTML= smsTotal.toFixed(2);
      totalBill += 0.75;
      totaltextBill.innerHTML = totalBill.toFixed(2);
    }
var totalCost = totalBill.toFixed(2);

      if (totalCost >= 50){
          // adding the danger class will make the text red
          totaltextBill.classList.add("danger");
        }
      else if (totalCost >= 30){
          totaltextBill.classList.add("warning");
        }

    }
  //add an event listener for when the add button is pressed
addBtns.addEventListener('click',textBillTotal);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
