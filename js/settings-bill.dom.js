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
