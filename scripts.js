var G_unadjustedFPTotal = 0;
var technical_Complexity = 0;

function calculateUnadjustedFP() {
    var input = 0
    var output = 0
    var inquire = 0
    var file = 0
    var interfaces = 0

    //I N P U T S
    input = $('#numInput').val()
    inputWeigth = document.querySelector('#inputWeight')
    inputWeigthValue = inputWeigth.options[inputWeigth.selectedIndex].value;
    inputTotal = input * inputWeigthValue
    $('#totalInput').val(inputTotal)
    console.log(inputTotal)
        //O U T P U T S
    output = $('#numOutput').val()
    outputWeigth = document.querySelector('#outputWeight')
    outputWeigthValue = outputWeigth.options[outputWeigth.selectedIndex].value;
    outputTotal = output * outputWeigthValue
    $('#totalOutput').val(outputTotal)
    console.log(outputTotal)
        //I N Q U I R E S
    inquire = $('#numInquire').val()
    inquireWeigth = document.querySelector('#inquireWeight')
    inquireWeigthValue = inquireWeigth.options[inquireWeigth.selectedIndex].value;
    inquireTotal = inquire * inquireWeigthValue
    $('#totalInquire').val(inquireTotal)
    console.log(inquireTotal)
        //F I L E S
    file = $('#numFile').val()
    fileWeigth = document.querySelector('#fileWeight')
    fileWeigthValue = fileWeigth.options[fileWeigth.selectedIndex].value;
    fileTotal = file * fileWeigthValue
    $('#totalFile').val(fileTotal)
    console.log(fileTotal)
        //I N Q U I R E S
    interfaces = $('#numInterface').val()
    interfacesWeigth = document.querySelector('#interfacesWeight')
    interfacesWeigthValue = interfacesWeigth.options[interfacesWeigth.selectedIndex].value;
    interfacesTotal = interfaces * interfacesWeigthValue
    $('#totalInterface').val(interfacesTotal)
    console.log(interfacesTotal)

    UFPtotal = inputTotal + outputTotal + inquireTotal + fileTotal + interfacesTotal
    G_unadjustedFPTotal = UFPtotal
    console.log(G_unadjustedFPTotal)
    $('#totalUFP').val(G_unadjustedFPTotal)
}

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

    technical_Complexity = parseInt(communicationsRadio) + parseInt(distributedData) + parseInt(peformanceCriteria) + parseInt(heavyHardware) + parseInt(transactionRates) +
        parseInt(dataEntry) + parseInt(updatingRadio) + parseInt(computationsRadio) + parseInt(installation) + parseInt(operation) +
        parseInt(portability) + parseInt(maintainability) + parseInt(userEfficiency) + parseInt(reusability);

    console.log(technical_Complexity);

    $('#complexWeight').val(technical_Complexity);

}