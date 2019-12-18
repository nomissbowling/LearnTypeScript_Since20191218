var Add = (a:number, b:number):number => a + b;
console.log(Add(334,1919));

var ScopLosing = {
    text: "Property from lexical scope",
    run: function(){
        setTimeout(() =>{
            alert(<string>this.text);
        },1000);
    }
};
ScopLosing.run();