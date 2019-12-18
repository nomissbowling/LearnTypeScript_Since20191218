"use strict";
function CalcAverage(a, b, c) {
    let total = a + b + c;
    return "The Average is " + (total / 3);
} //End_Function
console.log(CalcAverage(1919, 334, 810));
// オプションパラメータ
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
// デフォルトパラメータ
function Concatenate(items, separater = ",", beginAt = 0, endAt = items.length) {
    var result = "";
    for (var i = beginAt; i < endAt; ++i) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += separater;
        }
    } //End_For
    return result;
} //End_Function
var items = ["AA", "BBB", "CCCC"];
var result = Concatenate(items);
console.log(result);
var result = Concatenate(items, "_", 0, 2);
console.log(result);
// レストパラメータ
function RestAverage(...a) {
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; ++i) {
        total += a[i];
        count += 1;
    } //End_For
    return "The average is " + (total / count);
} //End_Function
console.log(RestAverage(2, 4, 6, 8, 10));
console.log(RestAverage(114, 514, 1919, 810));
//# sourceMappingURL=021_Function.js.map