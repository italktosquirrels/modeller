//import languages from '../languages.js';

var G_unadjustedFPTotal = 0;
var technical_Complexity = 0;
var company_Benefits = 0;
var adjustedFP = 0;
/**
 * This takes the user inputs and weights
 * and calculates the unadjusted function point value
 * By Alex Watson, 001197775
 */
function calculateUnadjustedFP() {
    //Variables to hold inputs
    var input = 0
    var output = 0
    var inquire = 0
    var file = 0
    var interfaces = 0

    //C A L C U L A T E  I N P U T S
    input = $('#numInput').val() //Holds the value of the user input for the number of inputs
    inputWeigth = document.querySelector('#inputWeight') //Gets the the weight values from the dropdown
    inputWeigthValue = inputWeigth.options[inputWeigth.selectedIndex].value; //Pulls the selected value out of the drop down
    inputTotal = input * inputWeigthValue //Calculates the input total
    $('#totalInput').val(inputTotal) //Assigns it to the respective field
    console.log(inputTotal)
        //C A L C U L A T E  O U T P U T S
    output = $('#numOutput').val() //Holds the value of the user input for the number of outputs
    outputWeigth = document.querySelector('#outputWeight') //Gets the the weight values from the dropdown
    outputWeigthValue = outputWeigth.options[outputWeigth.selectedIndex].value; //Pulls the selected value out of the drop down
    outputTotal = output * outputWeigthValue //Calculates the output total
    $('#totalOutput').val(outputTotal) //Assigns it to the respective field
    console.log(outputTotal)
        //C A L C U L A T E  I N Q U I R E S
    inquire = $('#numInquire').val() //Holds the value of the user input for the number of inquires
    inquireWeigth = document.querySelector('#inquireWeight') //Gets the the weight values from the dropdown
    inquireWeigthValue = inquireWeigth.options[inquireWeigth.selectedIndex].value; //Pulls the selected value out of the drop down
    inquireTotal = inquire * inquireWeigthValue //Calculates the inquire total
    $('#totalInquire').val(inquireTotal) //Assigns it to the respective field
    console.log(inquireTotal)
        //C A L C U L A T E  F I L E S
    file = $('#numFile').val() //Holds the value of the user input for the number of files
    fileWeigth = document.querySelector('#fileWeight') //Gets the the weight values from the dropdown
    fileWeigthValue = fileWeigth.options[fileWeigth.selectedIndex].value; //Pulls the selected value out of the drop down
    fileTotal = file * fileWeigthValue //Calculates the files total
    $('#totalFile').val(fileTotal) //Assigns it to the respective field
    console.log(fileTotal)
        //C A L C U L A T E  I N Q U I R E S
    interfaces = $('#numInterface').val() //Holds the value of the user input for the number of interfaces
    interfacesWeigth = document.querySelector('#interfacesWeight') //Gets the the weight values from the dropdown
    interfacesWeigthValue = interfacesWeigth.options[interfacesWeigth.selectedIndex].value; //Pulls the selected value out of the drop down
    interfacesTotal = interfaces * interfacesWeigthValue //Calculates the interfaces total
    $('#totalInterface').val(interfacesTotal) //Assigns it to the respective field
    console.log(interfacesTotal)

    UFPtotal = inputTotal + outputTotal + inquireTotal + fileTotal + interfacesTotal //Calculate the unadjusted Function Point
    G_unadjustedFPTotal = UFPtotal //Assign it to the global variable to be used by other methods
    console.log(G_unadjustedFPTotal)
    $('#totalUFP').val(G_unadjustedFPTotal) //Place in textbox to be seen
}

/**
 * Technical Complexity
 * Gets the values from the Technical Complexity Radio Boxes
 * and calculates the weighting
 * Author: Alexander Gellert
 */
function technicalComplexity() {
    var communicationsRadio;
    var distributedData;
    var peformanceCriteria;
    var heavyHardware;
    var transactionRates;
    var dataEntry;
    var updatingRadio;
    var computationsRadio;
    var installation;
    var operation;
    var portability;
    var maintainability;
    var userEfficiency;
    var reusability;

    communicationsRadio = $('input[name="communicationsRadio"]:checked').val();
    distributedData = $('input[name="distributedData"]:checked').val();
    peformanceCriteria = $('input[name="peformanceCriteria"]:checked').val();
    heavyHardware = $('input[name="heavyHardware"]:checked').val();
    transactionRates = $('input[name="transactionRates"]:checked').val();
    dataEntry = $('input[name="dataEntry"]:checked').val();
    updatingRadio = $('input[name="updatingRadio"]:checked').val();
    computationsRadio = $('input[name="computationsRadio"]:checked').val();
    installation = $('input[name="installation"]:checked').val();
    operation = $('input[name="operation"]:checked').val();
    portability = $('input[name="portability"]:checked').val();
    maintainability = $('input[name="maintainability"]:checked').val();
    userEfficiency = $('input[name="userEfficiency"]:checked').val();
    reusability = $('input[name="reusability"]:checked').val();

    technicalSum = parseInt(communicationsRadio) + parseInt(distributedData) + parseInt(peformanceCriteria) + parseInt(heavyHardware) + parseInt(transactionRates) +
        parseInt(dataEntry) + parseInt(updatingRadio) + parseInt(computationsRadio) + parseInt(installation) + parseInt(operation) +
        parseInt(portability) + parseInt(maintainability) + parseInt(userEfficiency) + parseInt(reusability);

    console.log(technical_Complexity);

    technical_Complexity = parseFloat(0.65 + (0.01 * technicalSum))
    console.log(technical_Complexity);
    $('#complexWeight').val(technical_Complexity);

}

function calcFP() {
    adjustedFP = technical_Complexity * G_unadjustedFPTotal
}

/**
 * This caclulates a speed factor for the project based on the 
 * developer breakdown
 * This is developed by Alexander Watson, 001197775
 */
function calculateDeveloperSpeedFactor() {
    jNum = 0
    iNum = 0
    sNum = 0
    totalDevNum = 0.0

    jWeight = 1 //Junior Dev's weight  
    iWeight = 1.2 //Intermediate Dev's weight
    sWeight = 1.5 //Senior Dev's Weight

    //Grab all the numbers from the input
    jNum = $('#numJunior').val()
    iNum = $('#numIntermediate').val()
    sNum = $('#numSenior').val()

    //Calculate the total number of developers
    totalDevNum = parseFloat(jNum) + parseFloat(iNum) + parseFloat(sNum)
    console.log(totalDevNum)

    //Multiply the number of devs by their respective weights
    newJuniorWeight = jNum * jWeight
    newIntermediateWeight = iNum * iWeight
    newSeniorWeight = sNum * sWeight
        // newJuniorWeight = Math.pow(jNum,sWeight)
        // newIntermediateWeight = Math.pow(iNum, iWeight)
        // newSeniorWeight = Math.pow(sNum, jWeight)
        //Assign their new factors to the page
    $("#totalJunior").val(newJuniorWeight)
    $("#totalIntermediate").val(newIntermediateWeight)
    $("#totalSenior").val(newSeniorWeight)

    //Calculate the total factor of all the devs
    totalDev = parseFloat(newJuniorWeight) + parseFloat(newIntermediateWeight) + parseFloat(newSeniorWeight)
    console.log(totalDev)

    //Devide the total factor by the numer of devs
    newFactor = parseFloat(totalDev / totalDevNum)
    x = 1 - newFactor
    console.log(newFactor)
        //Making sure the minimum multipluer is at least 1
        //and place it in the output box
    if (isNaN(newFactor)) {
        $("#projectDeveloperFactor").val(1)
    } else {
        $("#projectDeveloperFactor").val(newFactor)
    }
}


/**
 * THE SMOKING FACTOR
 * Determines how many days of productivity are lost due to smokers.
 * Each smoker is assumed to take 11 sick days a year, or 43.2 minutes per dar
 * Each smoker is assumed to take 3 smoke breaks a day lasting 15 minutes each (Total: 45 minutes)
 */
function calculateSmokingFactor() {
    //Stores total smokers
    var smokers = $('#number_of_smokers').val();
    //Stores total project length
    var projectLength = $('#project_length').val();

    //Determines total minutes lost due to smokers
    var totalMinutes = ((smokers * 45) * projectLength) + smokers * (projectLength * 43.2)
        //Converted into days
    var totalDays = totalMinutes / 1440;

    //Displays to screen
    $('#smoking_factor_results').val(totalDays + " Days Lost");
    console.log(totalDays);
}


// This takes the value from the technical complexity section and multiplies it by the LOC/FP average
// which was provided in the excel file.
// This was completed by Andrew Castro - 000771147
function linesOfCode() {
    // Gets the current value of the selected radio button. This value is equal to the LOC/FP value assiociated with the programming language
    // var checkedValue = $('input[name=languageRadio]:checked', '.form-check').val();
    // console.log(totalLines);
    console.log(languages);
    //console.log("TEST")
}