function myFood(){
    setTimeout(() =>{
    console.log("Food is being prepared");
    foodcallback("Ready")
    },30);
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
    },10);
}   
myCoffee() ;

function foodcallback(value){
    console.log("Food CallBack = ",value)
}

function pastacallback(value){
    console.log("Pasta CallBack =",value)
}

function coffeecallback(value){
    console.log("Coffee CallBack =",value)
}
