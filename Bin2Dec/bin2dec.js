function convertButton() {
  const binaryValue = document.getElementById("binary").value;
  if (validateInput(binaryValue)) {
    const decimalValueOutput = document.getElementById("decimal");
    const decimalValue = convertBinToDec(binaryValue);
    decimalValueOutput.innerText = decimalValue;
  } else {
    const decimalValueOutput = document.getElementById("decimal");
    decimalValueOutput.innerText = 'Invalid Input! The string must be a 8-digit string containing only 1 and 0';
  }
}

function convertBinToDec(binaryValue) {
  let binaryValueArray = binaryValue.split("");
  binaryValueArray = binaryValueArray.map(digit => parseInt(digit));
  const decimalValue = binaryValueArray.reduce((acc, curr, index) => {
    const expoent = 7 - index;
    acc += Math.pow(2, expoent) * curr;
    return acc;
  });

  return decimalValue;
}

function validateInput(binaryValue) {
  const lengthIsEight = binaryValue.length === 8;
  const hasNotBinValue = binaryValue.search(/[^0-1]/) === -1;
  return lengthIsEight && hasNotBinValue;
}
