const car1 = {
    brand : "Honda",
    model : "H1",
    year : 1991
}


const car2 = {
    brand : "Toyota",
    model : "A2",
    owner : "Viktor"
}

const car3 = {...car1, ...car2, year: 2005};

console.log(car3);