function convertButton() {
  const binaryValue = document.getElementById("binary").value;
  if (validateInput(binaryValue)) {
    const decimalValueOutput = document.getElementById("decimal");
    const decimalValue = convertBinToDec(binaryValue);
    decimalValueOutput.innerText = decimalValue;
  } else {
    const decimalValueOutput = document.getElementById("decimal");
    decimalValueOutput.innerText = 'Invalid Input! The string must contain only 1 and 0';
  }
}

function convertBinToDec(binaryValue) {
  let binaryValueArray = binaryValue.split("");
  binaryValueArray = binaryValueArray.map(digit => parseInt(digit));
  const decimalValue = binaryValueArray.reduce((acc, curr, index) => {
    const expoent = binaryValueArray.length - (index + 1);
    acc += Math.pow(2, expoent) * curr;
    return acc;
  }, 0);

  return decimalValue;
}

function validateInput(binaryValue) {
  console.log(binaryValue.length === 0);
  const hasNotBinValue = binaryValue.search(/[^0-1]/) === -1;
  return hasNotBinValue && binaryValue.length !== 0;
}
