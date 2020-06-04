let n;      // Number on screen
let mem;     // Number in memory
let next = 0;   // Next number? (0 = no, 1 = yes)
let op = "";    // Operator

function Digit(d) {
    if (!next) {
        n = Number(document.getElementById("screen").innerHTML);
    } else {
        n = 0;
        next = 0;
    }
    n = (n * 10) + d;
    document.getElementById("screen").innerHTML = n;
}

function Operation(o) {
    if (op === "") {
        mem = n;
    } else {
        switch (op) {
            case "+":
                mem += n;
                break;
            case "-":
                mem -= n;
                break;
            case "x":
                mem *= n;
                break;
            case "/":
                mem /= n;
                break;
            case "%":
                mem %= n;
                break;
        }
        document.getElementById("screen").innerHTML = n = mem;
    }
    next = 1;
    op = o;
}

function AC() {
    document.getElementById("screen").innerHTML = mem = n = 0;
    op = "";
}

function Sign() {
    n *= -1;
    document.getElementById("screen").innerHTML = n;
}