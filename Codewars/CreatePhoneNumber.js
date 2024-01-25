//First option
function createPhoneNumber(numbers) {
  return console.log(
    "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5]
    + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
  )
}

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

//Second option
function createPhoneNumber2(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return console.log(format);
}

createPhoneNumber2([1, 1, 1, 1, 1, 1, 2, 1, 1, 1]);

//Code using array destructuring
function createPhoneNumber3(numbers) {
  for (i = 0; i < 10; i++) {
    numbers.push();
  }
  let [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9] = numbers
  let phoneNumber = "(" + num1 + num2 + num3 + ") " + num4 + num5 + num6 + "-" + num7 + num8 + num9 + num0;
  return console.log(phoneNumber);
}

createPhoneNumber3([1, 1, 1, 1, 1, 1, 1, 3, 1, 1]);