"use strict";
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {})); //End_Enum
// フラグの使用
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
// フラグの評価
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;
console.log(hasD);
//# sourceMappingURL=012_BitFlag.js.map