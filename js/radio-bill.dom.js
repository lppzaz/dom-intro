//get a reference to the add button

var radBtn = document.querySelector('.radioBillAddBtn')
var callTwo = document.querySelector('.callTotalTwo')
var smsTwo = document.querySelector('.smsTotalTwo')
var radioTotal = document.querySelector('.totalTwo')


var radioBill = TextBill();

function radioBillTotal(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
    var billtype = checkedRadioBtn.value;
    radioBill.billItem(billtype);
  }
  callTwo.innerHTML = radioBill.callsTotal();
  smsTwo.innerHTML = radioBill.smsTotal();
  radioTotal.innerHTML = radioBill.totalBill();
  // set critical level colorchange
  var classColor = radioBill.color();
  radioTotal.classList.add(classColor);
}
//add an event listener for when the add button is pressed
radBtn.addEventListener('click',radioBillTotal);
