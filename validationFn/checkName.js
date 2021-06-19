function checkName(nodeElem) {
  const val = nodeElem.value.trim().toLowerCase();
  const regex = /(^[a-ząęńółńżź])([a-ząęńółńżź]+$)|(\s[a-ząęńółńżź]+$)/g;
  const conditionOfLength = val.length >= 2;
  const conditionOfString = regex.test(val);

  if (conditionOfLength && conditionOfString) {
    return true;
  }

  return false;
}

export default checkName;
