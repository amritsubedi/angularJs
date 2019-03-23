var person = {
    name: ""
};

document.addEventListener('DOMContentLoaded', contentLoaded );

function contentLoaded(event) {
    document.getElementById('name').addEventListener('keyup', keyUp );
}

function keyUp(event) {
    person.name = document.getElementById('name').value;
    calculateNumericValue(person.name);
}

function calculateNumericValue(name) {
    console.log(name, 'name');

    var totalNumericValue = 0;

    for (var i = 0; i  < name.length; i++) {
        totalNumericValue += name.charCodeAt(i);
    }

    printOutput(name, totalNumericValue);
}

function printOutput(name, value) {
    var output = "Total Numeric value of "+ name + " is: " + value;
    document.getElementById('output').innerText = output;
    console.log(name, value, 'output');
}

