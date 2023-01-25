var counterVal = 0;
var counterValb = 0;
var counterValc = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}
function incrementClickb() {
    updateDisplayb(++counterValb);
}
function incrementClickc() {
    updateDisplayc(++counterValc);
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}
function updateDisplayb(valb) {
    document.getElementById("counter-labelb").innerHTML = valb;
}
function updateDisplayc(valc) {
    document.getElementById("counter-labelc").innerHTML = valc;
}