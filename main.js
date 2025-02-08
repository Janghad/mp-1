function addition() {
    
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first + second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "rgb(30, 106, 222)";
    }
}

function substaction() {
    
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first - second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "rgb(30, 106, 222)";
    }
}

function multiplication() {
    
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first * second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "rgb(30, 106, 222)";
    }
}

function division() {
    
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first / second;

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "rgb(30, 106, 222)";
    }
}

function power() {
    
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = 1;

    for (let i = 0; i < second; i++) {
        result = first * result;
    }

    document.getElementById("output").innerHTML = `<h3>${result}</h3>`;

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "rgb(30, 106, 222)";
    }
}


function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}