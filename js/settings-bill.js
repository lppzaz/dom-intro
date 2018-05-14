// refences to all the settings input fields
var callcostElem = document.querySelector('.callCostSetting')
var smscostElem = document.querySelector('.smsCostSetting')
var warningElem = document.querySelector('.warningLevelSetting');
var criticalElem = document.querySelector('.criticalLevelSetting');
// display elements
var settingsCallTotal = document.querySelector('.callTotalSettings');
var settingsSmsTotal = document.querySelector('.smsTotalSettings');
var settingsTotalElem = document.querySelector('.totalSettings');
// reference to buttons
var settingsAddBtn = document.querySelector('.button')
var updateSettingsBtn = document.querySelector('.updateSettings')


function SettingsBill() {
  //create a variable that will keep track of the total bill
  var callCost = 0;
  var smsCost = 0;
  var warning = 0;
  var critical = 0;
  var calls = 0;
  var smses = 0;
  var total = 0;

  function billType(billItemType){
  if (billItemType === 'call') {
      calls += callCost;
  }
      else if  (billItemType === 'sms') {
      smses += smsCost;
    }
    total = calls+smses
  }

  // setter functions
  function setCallCost(value){
    if (value !== undefined) {
      callCost = parseFloat(value);
    }
  }
  function setSmsCost(value){
    if (value !== undefined) {
      smsCost = parseFloat(value);
    }
  }
  function warningLevel(value){
    if (value !== undefined) {
      warning = parseFloat(value);
    }
  }
  function criticalLevel(value){
    if (value !== undefined) {
      critical = parseFloat(value);
    }
  }
  // getter functions
  function getCalls(){
    return calls.toFixed(2)
  }

  function getSmses(){
    return smses.toFixed(2)
  }

  function getTotals(){
    return total.toFixed(2)

  }

  function isCritical(){
    return total >= critical;
  }


  function colorchange(){
    if (total >= critical){
        // adding the danger class will make the text red
      return "danger";
    }  // waring class makes the text orange
    else if (total >= warning){
      return "warning";
    }
  }

  return {
    //function aliases (remember to write () to call funtions)
    billItem:   billType,
    callsTotal:   getCalls,
    smsTotal:     getSmses,
    totalBill:    getTotals,
    color:        colorchange,
    callCost:     setCallCost,
    smsCost:      setSmsCost,
    critical:     criticalLevel,
    warning:      warningLevel,
    overCritical: isCritical,
  }

}

var settingsBill = SettingsBill();



function settingsBillTotal(){
// created if statement that checks overCritical and prevents adds after crit level is reached.
  if (settingsBill.overCritical()){
    return
  }

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtn){
    var billItem = checkedRadioBtn.value;
    settingsBill.billItem(billItem)
  }
  settingsCallTotal.innerHTML = settingsBill.callsTotal();
  settingsSmsTotal.innerHTML = settingsBill.smsTotal();
  settingsTotalElem.innerHTML = settingsBill.totalBill();
  // set critical level colorchange
  var classColor = settingsBill.color();
  settingsTotalElem.classList.add(classColor);
  //stop total updating once critical level is reached




}

function updateSettings(){
  var newCallCost = callcostElem.value
  var newSmsCost = smscostElem.value
  var newCriticalLevel = criticalElem.value
  var newWarningLevel = warningElem.value
  // set values
  settingsBill.callCost(newCallCost);
  settingsBill.smsCost(newSmsCost)
  settingsBill.critical(newCriticalLevel)
  settingsBill.warning(newWarningLevel)
}

//add an event listener for when the add button is pressed
settingsAddBtn.addEventListener('click', settingsBillTotal);
updateSettingsBtn.addEventListener('click',updateSettings);
