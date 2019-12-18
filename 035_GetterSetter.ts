interface StockItem {
    Description: string;
    Asin: string;
} //End_Interface

class WarehouseLocation {
    private _StockItem: StockItem = {Asin:"",Description:""};
    
    constructor(
        public Aisle:number,
        public Slot: string
    ){
    } //End_Constructor

    get StockItem(){
        return this._StockItem
    } //End_Getter
    set StockItem(item: StockItem){
        this._StockItem = item;
    } //End_Setter
} //End_Class

var figure: StockItem = {
    Asin: "B001TEQ2PI",
    Description: "Figure",
} //End_Object
var warehouseSlot = new WarehouseLocation(15, "A6");
console.log(warehouseSlot);
warehouseSlot.StockItem = figure;
console.log(warehouseSlot);