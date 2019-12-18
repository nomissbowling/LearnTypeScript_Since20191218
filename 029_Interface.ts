interface Point {
    X: number;
    Y: number;
} //End_Interface

interface Passenger {
    Name: string;
} //End_Interface

interface Vehicle {
    // コンストラクタ
    new(): Vehicle;
    // プロパティ
    CurrentLocation: Point;
    // メソッド
    TravelTo(point: Point): void;
    AddPassenger(passenger: Passenger): boolean;
    RemovePassenger(passenger: Passenger): boolean;
} //End_Interface
interface Vehicle{
    Name: string;
} //End_Interface

