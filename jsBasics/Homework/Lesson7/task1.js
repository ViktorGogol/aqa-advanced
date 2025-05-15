
function handleNum(digit, numberEven, numbedOdd){
    numberEven();
    numbedOdd();
}

function handleEven(n) {
    if (n % 2 == 0){
        return console.log("number is even")
    }
}

function handleOdd(b){
    if (b % 2 != 0){
        return console.log("number is odd")
    }
}

handleEven(2, handleEven, handleOdd)
