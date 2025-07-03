function sayWithDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

sayWithDelay("Hello!", 1500);
