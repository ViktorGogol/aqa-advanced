
function handleNum(digit, numberEven, numbedOdd){
    numberEven(digit);
    numbedOdd(digit);
}

function handleEven(n) {
    if (n % 2 === 0){
        return console.log("number is even");
    }
}

function handleOdd(b){
    if (b % 2 != 0){
        return console.log("number is odd");
    }
}

handleNum(3, handleEven, handleOdd);
