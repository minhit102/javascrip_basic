let arr = [1,2,3,4,5,6,7,8,9,10];
/*let arr = [
    {name: 'Minh1', age : 18},
    {name: 'Minh2', age : 17},
    {name: 'Minh3', age : 25},
    {name: 'Minh4', age : 24},
    {name: 'Minh5', age : 50},


]*/
// filter, find
let filter = arr.filter((item, index) => {
    return item && item.age > 60;
});

let find1 = arr.find((item, index) => {
    return item && item.age > 60;
});

console.log(filter)

console.log(find1)