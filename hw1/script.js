let num = 42; 

if (typeof num === 'number') {
  if (num % 2 === 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }
} else {
  console.log("Введите только числа");
}
