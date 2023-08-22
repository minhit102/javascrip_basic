let myNumber = [4,1,-20,-17,5,9,-6];
let removeNeg = (number,func) =>{
    let newArr = [];
    for(let x of number){
        if(func(x)){
            newArr.push(x);
        }
    }
    return newArr;
}
let posNumber = removeNeg(myNumber , (x)=> x >=0)
console.log(posNumber)