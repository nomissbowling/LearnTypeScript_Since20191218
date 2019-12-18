interface House{
    BedRooms: number;
    BathRooms: number;
} //End_Interface

interface Mansion {
    BedRooms: number;
    BathRooms: number;
    Butlers: number;
} //End_Interface

var avenueRoad: House = {
    BedRooms: 11,
    BathRooms: 10,
} //End_Object

// var mansion: Mansion = avenueRoad;
var mansion: Mansion = <Mansion>avenueRoad;
console.log(mansion);
console.log(mansion.Butlers === undefined);

var Name: string = "Avenue Road";
var ngo: number = <number><any>Name;
console.log(ngo);