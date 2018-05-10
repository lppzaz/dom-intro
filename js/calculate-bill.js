//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElement = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
// add event listener
function calculateBtnClicked(){

  billTotalElement.classList.remove("warning");
  billTotalElement.classList.remove("danger");

    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }

        else if(billItem === "sms"){
            billTotal += 0.75;
        }
    }

    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    var totalCost = billTotal;


    //color the total based on the criteria

    if (totalCost >= 30){
        // adding the danger class will make the text red
        billTotalElement.classList.add("danger");
      }
    else if (totalCost >= 20){
        billTotalElement.classList.add("warning");
      }


    }

calculateBtnElement.addEventListener('click', calculateBtnClicked);





//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
