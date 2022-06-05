function cs142MakeMultiFilter(originalArray){
    function 



}
var arrayFilter1 = cs142MakeMultiFilter([1,2,3])
arrayFilter1(function (elem){
    return elem !== 2;
}, function (currentArray){
    console.log(this);
    console.log(currentArray);
}
);

arrayFilter1(function(elem){
    return elem !== 3;
});

var currentArray = arrayFilter1();
console.log("currentarray", currentArray);

function filtertwos(elem){
    return elem !== 2;
}

function filterthrees(elem){
    return elem !== 3;
}

var arrayFilter2 = cs142MakeMultiFilter([4,5,6]);
var currentArray2 = 