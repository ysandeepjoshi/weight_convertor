function weightconvertor(value){
    var val2Pound = value*2.2046;
    var num = val2Pound.toFixed(2);

    document.getElementById("outputPounds").innerHTML = num;
}

function pound2Kg(value){
    var val2Kg = value /2.2046;
    var num = val2Kg.toFixed(2);

    document.getElementById("outputPounds").innerHTML = num;
}