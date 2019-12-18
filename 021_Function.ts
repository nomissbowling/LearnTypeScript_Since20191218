function CalcAverage(a:number, b:number, c:number): string{
    let total = a + b + c;
    return "The Average is " + (total / 3);
} //End_Function
console.log(CalcAverage(1919, 334, 810));

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