function CalcAverage(a:number, b:number, c:number): string{
    let total = a + b + c;
    return "The Average is " + (total / 3);
} //End_Function
console.log(CalcAverage(1919, 334, 810));

// オプションパラメータ
function GetAverage(a:number, b:number, c?:number): string{
    let total = a + b;
    let count = 2;
    if(typeof c != "undefined"){
        total += c;
        count += 1;
    } //End_I
    return "The Average is " + (total / count);
} //End_Function
console.log(GetAverage(1919,334));
console.log(GetAverage(1919,810,334))

// デフォルトパラメータ
function Concatenate(items:string[], separater:string = ",", beginAt:number = 0, endAt:number = items.length): string{
    var result = "";
    for(var i = beginAt; i < endAt; ++i){
        result += items[i];
        if(i < (endAt - 1)){ result += separater;}
    } //End_For
    return result;
} //End_Function
var items = ["AA","BBB","CCCC"];
var result = Concatenate(items);
console.log(result);
var result = Concatenate(items, "_", 0, 2);
console.log(result);

// レストパラメータ
function RestAverage(...a:number[]): string{
    var total = 0;
    var count = 0;
    for(var i = 0; i < a.length; ++i){
        total += a[i];
        count += 1;
    } //End_For
    return "The average is " + (total / count);
} //End_Function
console.log(RestAverage(2,4,6,8,10));
console.log(RestAverage(114,514,1919,810));
