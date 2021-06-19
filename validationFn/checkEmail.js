function checkEmail(nodeElem) {
  const val = nodeElem.value;
  const regex = /@\w{2,6}\.\w{2,3}/;
  const conditionOfLength = val.length >= 5;
  const conditionOfString = regex.test(val);

  if (conditionOfLength && conditionOfString) {

    return true;
  }

  return false;
}

export default checkEmail;
