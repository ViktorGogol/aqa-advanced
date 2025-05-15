function funRecurs(num){
    console.log("Число зараз " + num)
    if (num >= 1){
        num = num - 1
        funRecurs(num);
    }
    }

console.log(funRecurs(5));