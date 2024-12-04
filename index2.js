function myFood(){
    let promise = new Promise(function(resolve , reject){
        setTimeout(() =>{
            console.log("Food in process")
            resolve("Food is ready")
        },10);
    });
    return promise ;
}

function myPasta(){
    let promise = new Promise(function(resolve , reject){
        setTimeout(() =>{
            console.log("Pasta in process")
            resolve("Pasta is ready")
        },20);
    });
    return promise ;
}

function myCoffee(){
    let promise = new Promise(function(resolve , reject){
        setTimeout(() =>{
            console.log("Coffee in process")
            resolve("Coffee is ready")
        },30);
    });
    return promise ;
}

let promise = myFood();

promise.then(function(value){
    console.log("Food CallBack =",value)
    return myPasta;
})
.then(function(pastaValue){
    console.log("Pasta CallBack =",pastaValue)
    return myCoffee;
})
.then(function(coffeeValue){
    console.log("Coffee CallBack =",coffeeValue)
})
.catch(function(error){
    console.log("Error =",error)
});