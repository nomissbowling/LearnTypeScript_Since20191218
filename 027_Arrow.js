"use strict";
var Add = (a, b) => a + b;
console.log(Add(334, 1919));
var ScopLosing = {
    text: "Property from lexical scope",
    run: function () {
        setTimeout(() => {
            alert(this.text);
        }, 1000);
    }
};
ScopLosing.run();
//# sourceMappingURL=027_Arrow.js.map