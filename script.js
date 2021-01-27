
function filterBy(array,typeData){
    return array.filter(function (currentValue) {
        return typeof currentValue!==typeData;
    })
}
console.log(filterBy(["hello","today",8,"12",12,null], "string"));



