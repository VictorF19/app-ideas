function convertButton() {
  const binaryValue = document.getElementById("binary");
  if (validateInput(binaryValue)) {
    const decimalValueOutput = document.getElementById("decimal");
    const decimalValue = convertBinToDec(binaryValue);
    decimalValueOutput.innerText = decimalValue;
  } else {
    const decimalValueOutput = document.getElementById("decimal");
    decimalValueOutput.innerText = 'Invalid Input! The string may be a 8-digit string containing only 1 and 0';
  }
}

function convertBinToDec(binaryValue) {
  return "10";
}

function validateInput(binaryValue) {
  return binaryValue.length === 8 && binaryValue.search(/[^0-1]/) !== -1;
}
