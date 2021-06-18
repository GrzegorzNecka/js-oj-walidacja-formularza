const checkConditions = (...conditions) => {
  const filterConditions = conditions.filter(condition => condition);
  return conditions.length === filterConditions.length;
};

function checkPass(nodeElem) {
  const val = nodeElem.value;

  const regexUpperCase = /[A-Z]+/;
  const regexSpecialChar = /[!@#\$%\^\&*\)\(+=._-]+/;
  const regexSpecialNum = /[1-9]+/;

  const conditionOfLength = val.length >= 8;
  const conditionOfString = regexUpperCase.test(val);
  const conditionOfSpecialChar = regexSpecialChar.test(val);
  const conditionOfNum = regexSpecialNum.test(val);

  return checkConditions(
    conditionOfLength,
    conditionOfString,
    conditionOfSpecialChar,
    conditionOfNum
  );
}

export default checkPass;
