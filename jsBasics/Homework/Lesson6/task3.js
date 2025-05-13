function checkOrder (available, ordered){
    if (ordered === 0 ){
        return "Your order is empty";
    }
    else if (available <= ordered){
        return "Your order is too large, we don’t have enough goods.";
    }

    else if (available >= ordered){
        return "Your order is accepted";
    }
}

console.log(checkOrder(10,0));
console.log(checkOrder(7,11));
console.log(checkOrder(12,5));
