var obj = {name:"Smiley"};
var greeting = function(str, lang){
    this.value = 'greetingValue';
    console.log("Welcome "+this.name+" to "+str+" in "+lang);
};
var objGreeting = greeting.bind(obj, 'the world'); 

objGreeting('JS');
var newObj = new objGreeting('JS');
console.log(newObj.value);


Function.prototype.myBind = function() {
    var thatFunc = this, 
        that = [].shift(arguments);
        thatArgs = [].slice.call(arguments)

    if (typeof thatFunc !== 'function') {
        throw new TypeError('Function.prototype.bind - ' +
             'what is trying to be bound is not callable');
    }

    var fBound  = function() {
        return thatFunc.apply(this instanceof fBound
                 ? this
                 : thatArg,
                 args.concat(Array.prototype.slice.call(arguments)));
    };
    var fNOP = function() {};
    if (thatFunc.prototype) {
      fNOP.prototype = thatFunc.prototype; 
    }
    fBound.prototype = new fNOP();
    return fBound;
}

let obj = {name: 'fanfan'}
function getName(age) {
    console.log(this.name, age)
}
getName()
let bindFun = getName.bind(obj, 23)
bindFun()