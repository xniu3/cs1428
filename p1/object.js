let obj = {count:0};
obj.increment = function(amount){
    this.count += amount;
    return this.count;

}
function pluser(value){
    if (pluser.invocations == undefined){
        pluser.invocations = 0;
    }
    pluser.invocations ++;
    console.log('Invocation is ', pluser.invocations);
    return value + 1;
}
obj.increment(4);
console.log(obj.count);
console.log(pluser(11));
console.log(pluser.toString());
console.log(pluser.apply(12));

function rectangle(width , height){
    this.width = width;
    this.height = height;
    this.area = function xijinping(){
        return this.width * this.height / 2;
    }
}
let r = new rectangle(89,64);
console.log(r.constructor.name == 'rectangle');
console.log(r);