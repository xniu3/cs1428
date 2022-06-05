var nums = [3, 9, 4, 0];
console.log(nums.length);
var target = nums[0];
console.log(target / 2);
var globalvar = null;
var michael = undefined;
var joanna = null;
let aFuncVar = function (x){
    console.log("Func called with x ", x);
    return x + 1;
}
myfunc(aFuncVar);
function myfunc(routine){
    console.log("called with" , routine.toString() );
    let retval = routine(10);
    console.log("retval:", retval);
    return retval
}
function fool(){
    var localvar;
    if (globalvar ){
        localvar = 2;
    }
    console.log(typeof(localvar));
    console.log(michael == joanna);
    console.log(michael === joanna);
}
fool();


let foo = {};

let bar = {"oilers":4, "avalanche":2};
foo.nickle = 'dime';
console.log(bar['oilers']);
delete foo.nickle;
console.log(foo.nickle);
skt = Object.keys(bar)
ig = Object.values(bar)
let anarr = {'theshy':1, 'ning':2, 'rookie':3};
ig = Object.values(anarr);
console.log(skt);
console.log(ig);
let dater = new Date();
console.log(dater.valueOf());
console.log(dater.toISOString());
console.log(dater.toLocaleDateString());
console.log(dater.toLocaleTimeString());

let re = /ab+c/
try{
    throw "This is an exception";
} catch(errstr){
    console.log("Get exception", errstr);
} finally{
    return
}