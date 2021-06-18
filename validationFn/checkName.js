function checkName(nodeElem) {
  const val = nodeElem.value;
  const regex = /^[a-ząęńółńżź]+$/g;

  const conditionOfLength = val.length >= 2;
  const conditionOfString = regex.test(val);

  if (conditionOfLength && conditionOfString) {
    return true;
  }

  return 'pole name musi mieć co najmniej dwa znaki oraz nie może zawierać cyfr i znaków specjalnych ';
}

export default checkName;
