function myFood(){
    setTimeout(() =>{
    console.log("Food is being prepared");
    foodcallback("Ready")
    },10);
}   
myFood() ;

function myPasta(){
    setTimeout(() =>{
    console.log("Pasta is being prepared");
    pastacallback("Ready")
    },20);
}   
myPasta() ;

function myCoffee(){
    setTimeout(() =>{
    console.log("Coffee is being prepared");
    coffeecallback("Ready")
    },30);
}   
myCoffee() ;

async function startProcess() {
    let value = await myFood();
    let pastaValue = await myPasta();
    let coffeeValue = await myCoffee();
    console.log(value)
    console.log(pastaValue)
    console.log( coffeeValue)
}
startProcess();

function foodcallback(value){
    console.log("Food CallBack = ",value)
}

function pastacallback(pastaValue){
    console.log("Pasta CallBack =",pastaValue)
}

function coffeecallback(coffeeValue){
    console.log("Coffee CallBack =",coffeeValue)
}
