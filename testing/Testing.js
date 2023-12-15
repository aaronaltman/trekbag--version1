const number = 5;

function convertBinary(number) {
  if (number < 0) {
    console.log("Please enter a positive number");
    return;
  } else {
    return number.toString(2);
  }
}

const a = convertBinary(number);
console.log(a);
