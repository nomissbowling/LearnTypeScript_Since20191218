"use strict";
class WarehouseLocation {
    constructor(Aisle, Slot) {
        this.Aisle = Aisle;
        this.Slot = Slot;
        this._StockItem = { Asin: "", Description: "" };
    } //End_Constructor
    get StockItem() {
        return this._StockItem;
    } //End_Getter
    set StockItem(item) {
        this._StockItem = item;
    } //End_Setter
} //End_Class
var figure = {
    Asin: "B001TEQ2PI",
    Description: "Figure",
}; //End_Object
var warehouseSlot = new WarehouseLocation(15, "A6");
console.log(warehouseSlot);
warehouseSlot.StockItem = figure;
console.log(warehouseSlot);
//# sourceMappingURL=035_GetterSetter.js.map