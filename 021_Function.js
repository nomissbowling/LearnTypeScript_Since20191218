"use strict";
function CalcAverage(a, b, c) {
    let total = a + b + c;
    return "The Average is " + (total / 3);
} //End_Function
console.log(CalcAverage(1919, 334, 810));
function GetAverage(a, b, c) {
    let total = a + b;
    let count = 2;
    if (typeof c != "undefined") {
        total += c;
        count += 1;
    } //End_I
    return "The Average is " + (total / count);
} //End_Function
console.log(GetAverage(1919, 334));
console.log(GetAverage(1919, 810, 334));
//# sourceMappingURL=021_Function.js.map