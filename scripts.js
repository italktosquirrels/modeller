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

    technical_Complexity = parseFloat(0.65 + (0.01 * technicalSum));
    console.log(technical_Complexity);
    $('#complexWeight').val(technical_Complexity);

}

/**
 * Company Benefits
 * Gets the values from the Company Benefits Radio Boxes
 * and calculates the weighting
 * Author: Alexander Gellert
 */
function companyBenefits() {
    var remoteWork;
    var workLunch;
    var workSnacks;
    var flexHours;

    remoteWork = $('input[name="remoteWork"]:checked').val();
    workLunch = $('input[name="workLunch"]:checked').val();
    workSnacks = $('input[name="workSnacks"]:checked').val();
    flexHours = $('input[name="flexHours"]:checked').val();
    benefitSum = parseInt(remoteWork) + parseInt(workLunch) + parseInt(workSnacks) + parseInt(flexHours);

    //Multiplier for every extra company benefit
    company_Benefits = parseFloat(0.90 + (0.01 * benefitSum));
    console.log(company_Benefits);
    $('#benefitsText').val(company_Benefits);

}

function calcFP() {
    adjustedFP = technical_Complexity * G_unadjustedFPTotal
}

function calculateDeveloperFactor() {

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