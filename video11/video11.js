for(let i = 0 ; i < 10 ; i++){
    console.log("Xin chao Vn " , i)
}
let a = {
    name : 'Minha',
    age  : 14,
}
let b = {
    name : 'Minhb',
    age  : 14,
}

let c = {
    name : 'Minhc',
    age  : 14,
}
let d = {
    name : 'Minhd',
    age  : 14,
}
let arr = [ a , b, c, d];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.splice(3, 0, "Lemon", "Kiwi", "Minh");
document.getElementById("demo2").innerHTML = fruits;