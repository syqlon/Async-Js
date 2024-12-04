console.log("ATE")

function myFood(callback){
   
    setTimeout(() =>{
        console.log("Food is being prepared");
        callback("Food is ready");
    }, 10);
}

function myPasta(pastacallback){
    
    setTimeout(() =>{
        console.log("Pasta is being prepared")
        pastacallback("Pasta is ready")
    },5)
}

function mycallback(value){
    console.log("Value =" , value);
}

function pastacallback(value){
    console.log("Food =" ,value)
}

myFood(mycallback);
myPasta(pastacallback);
