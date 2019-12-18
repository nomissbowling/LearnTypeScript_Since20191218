"use strict";
// Monumentインターフェースで配列の型を指定
var monuments = [];
// 配列に要素が追加されるたびに互換性のチェック
monuments.push({
    Name: "Statue of Liberty",
    Height: 46,
});
monuments.push({
    Name: "Peter the Great",
    Height: 96,
});
monuments.push({
    Name: "Hotti of Hotti",
    Height: 334,
});
function CompareMonumentHeight(a, b) {
    if (a.Height > b.Height) {
        return -1;
    }
    else if (a.Height < b.Height) {
        return 1;
    }
    return 0;
} //End_Function
// 配列の要素(Height)でソートしたい
var sorted1 = monuments.sort(CompareMonumentHeight);
// 最高の要素を取得
var Tallest = sorted1[0];
console.log(Tallest.Name);
// 列挙体
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["PadalCycle"] = 0] = "PadalCycle";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
    VehicleType[VehicleType["Car"] = 2] = "Car";
    VehicleType[VehicleType["Van"] = 3] = "Van";
    VehicleType[VehicleType["Bus"] = 4] = "Bus";
    VehicleType[VehicleType["Lorry"] = 5] = "Lorry";
})(VehicleType || (VehicleType = {})); //End_Enum
let type = VehicleType.Lorry;
var typeName = VehicleType[type];
console.log(typeName);
(function (VehicleType) {
    VehicleType[VehicleType["AirPlane"] = 7] = "AirPlane";
    VehicleType[VehicleType["ByCycle"] = 8] = "ByCycle";
})(VehicleType || (VehicleType = {}));
type = VehicleType.ByCycle;
console.log(type);
//# sourceMappingURL=009_Array.js.map