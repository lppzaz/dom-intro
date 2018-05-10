// get a reference to the sms or call radio button
var billItemTypeWithSettings = document.querySelector('.billItemTypeWithSettings')

// get refences to all the settings fields
var callTotal = document.querySelector('.callTotalSettings');
var smsTotal = document.querySelector('.smsTotalSettings');
var total = document.querySelector('.totalSettings');

//get a reference to the add button
var buttn = document.querySelector('.button')
//get a reference to the 'Update settings' button
var update = document.querySelector('.updateSettings')
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var totalBill = 0;
//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener('click',settingsTotal);
//add an event listener for when the add button is pressed
button.addEventListener('click',settingsTotal);
}
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
