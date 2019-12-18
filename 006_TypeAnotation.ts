// プリミティブ型
var Name: string = "Steve";
var heightInCentimeters: number = 175.3;
var IsActive: Boolean = true;

// 配列型
var Names: string[] = ["Wai", "NGO", "Sasuke"];

//関数アノテーション，パラメータ型，戻り値型
var SayHello: (name: string) => string;

// SayHelloの実装
SayHello = function (name: string){
    return "Hello " + name;
} //End_Function

// オブジェクト型アノテーション
var Person: {Name: string; HeightInCentimeters: number};

// パーソンオブジェクト実装
Person = {
    Name: "Bebebe",
    HeightInCentimeters: 175.3,
}; // End_Object

// インターフェースを用いてアノテーションを単純化
interface Personson{
    Name: string;
    HeightInCentimeters: number;
} //End_Interface
var p: Personson = {
    Name: "hotti",
    HeightInCentimeters: 334
} //End_Object















