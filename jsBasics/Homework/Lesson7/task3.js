function divide(numerator, denominator){
  try {    

    if (denominator === 0){
        throw new Error("На Нуль ділити не можна");
    }

    if (typeof numerator != "number" || isNaN(numerator) || typeof denominator !="number" || isNaN(denominator)){
        throw new Error("Одна з вводних не є числом");
    }
    result = numerator / denominator
        return console.log(result);
}

    

    catch(error){
        console.log("Помилка", error.message);
    }

    finally{
        console.log("Робота завершена");
    }

}

// Тести:
divide(5, 12);
divide(10, 0);
divide("STR", 5);
divide(3, "STR");