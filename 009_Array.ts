//配列
interface Monument {
    Name: string;
    Height: number;
}

// Monumentインターフェースで配列の型を指定
var monuments: Monument[] = [];

// 配列に要素が追加されるたびに互換性のチェック
monuments.push({
    Name: "Statue of Liberty",
    Height: 46,
});
monuments.push( {
    Name: "Peter the Great",
    Height: 96,
});
monuments.push( {
    Name: "Hotti of Hotti",
    Height: 334,
})

function CompareMonumentHeight(a: Monument, b:Monument): number {
    if(a.Height > b.Height){ return -1}
    else if (a.Height < b.Height){ return 1}
    return 0
} //End_Function

// 配列の要素(Height)でソートしたい
var sorted1 = monuments.sort(CompareMonumentHeight);

// 最高の要素を取得
var Tallest = sorted1[0];

console.log(Tallest.Name);


// 列挙体
enum VehicleType{
    PadalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry,
} //End_Enum
let type = VehicleType.Lorry;
var typeName = VehicleType[type];
console.log(typeName);

enum VehicleType{
    AirPlane = 7,
    ByCycle,
}
type = VehicleType.ByCycle;
console.log(type);

