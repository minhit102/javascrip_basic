let obj = {
    name : 'Minh1',
    address : 'Can Loc',
    func1 : function(){
        document.getElementById("demo1").innerHTML = "Minhit102" ;
    }
};

console.log("What is your name ?" , `My name is : ${obj.name} ` );
obj.func1();
obj['name'] = "Hoang Trong Minh 1 ";
let ten = "name"
document.getElementById('demo2').innerHTML = obj[ten];