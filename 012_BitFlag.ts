enum DiscFlags {
    None = 0,
    Drive = 1,
    Influence = 2,
    Steadiness = 4,
    Conscientiousness = 8
} //End_Enum

// フラグの使用
var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

// フラグの評価
var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive

console.log(hasD);